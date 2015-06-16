/* jshint -W030*/
'use strict';

var chai = require('chai'),
  expect = chai.expect,
  rewire = require('rewire'),
  initializer = rewire('../lib/initializer');

var DEFAULT_CONFIG = {
  useCookie: false,
  detectLngFromHeaders: false,
  fallbackLng: 'fr',
  sendMissingTo: 'fallback',
  resGetPath: '.tmp/lang/__lng__/__ns__.json',
  preload: 'fr'
};

var PASSED_CONFIG = {
  preload: 'kl',
  resGetPath: '.public/lang/__lng__/__ns__.json',
  languages: {
    'fr': {
      code: 'fr',
      countryCode: 'fr',
      rtl: false,
      name: 'français'
    },
    'kl': {
      code: 'kl',
      countryCode: 'kl',
      rtl: false,
      name: 'klingon'
    }
  },
  locales: ['fr', 'kl'],
  supportedLngs: ['fr', 'kl'],
  fallbackLng: 'kl'
};

var MERGED_CONFIG = {
  useCookie: false,
  detectLngFromHeaders: false,
  fallbackLng: 'kl',
  sendMissingTo: 'fallback',
  resGetPath: '.public/lang/__lng__/__ns__.json',
  supportedLngs: ['fr', 'kl'],
  preload: 'kl',
  languages: {
    'fr': {
      code: 'fr',
      countryCode: 'fr',
      rtl: false,
      name: 'français'
    },
    'kl': {
      code: 'kl',
      countryCode: 'kl',
      rtl: false,
      name: 'klingon'
    }
  },
  locales: ['fr', 'kl']
};

describe('the i18n initializer', function () {

  it('uses default i18next config when no option passed', function (done) {

    initializer.__set__('i18next', {
      init: function(options){
        expect(options).to.deep.eql(DEFAULT_CONFIG);
        done();
      }
    });

    initializer();

  });

  it('merges passed options with default config', function(done){

    initializer.__set__('i18next', {
      init: function(options){
        expect(options).to.deep.eql(MERGED_CONFIG);
        done();
      }
    });

    initializer(PASSED_CONFIG);

  });


});
