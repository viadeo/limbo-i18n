/**
 * Runtime HBS helpers
 *
 * Resets the templating helper stack between requests, to
 * ensure that push/pop helpers can be used without side-effects
 *
 * Setup t helper with current req.i18n
 */
module.exports = function (hbs) {

  return function initRuntimeHelpers(req, res, next) {

    // Override render to ensure that the t helper is always set with the request language
    // Hacky, but the best we can do for the moment.
    var render = res.render;
    res.render = function (view, locals, cb) {
      hbs.registerHelper('t', function (key, args) {
        if (args && args.hash) {
          // Context must always be a String
          if (args.hash.context) {
            args.hash.context += '';
          }

          // For security, never use hbs.SafeString here
          return req.i18n.t(key, args.hash);
        }

        // For security, never use hbs.SafeString here
        return req.i18n.t(key);
      });
      render.call(res, view, locals, cb);
    };

    return next();
  };
};
