/**
 * i18next initializer w/ pre-existing configuration
 */
var i18next = require('i18next'),
  _ = require('lodash'),
  debug = require('debug')('initializer:i18n');

var defaultOptions = {
  useCookie: false,
  detectLngFromHeaders: false,
  fallbackLng: 'fr',
  sendMissingTo: 'fallback',
  resGetPath: '.tmp/lang/__lng__/__ns__.json',
  preload: 'fr'
};

module.exports = function (options) {
  i18next.init(_.merge(defaultOptions, options));
  debug('ok');
};
