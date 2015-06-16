/* jshint -W030*/
'use strict';

var chai = require('chai'),
  expect = chai.expect,
  rewire = require('rewire'),
  main = rewire('../');

  describe('the i18n module', function () {

    it('exposes an initializer', function(){
      expect(main).to.have.property('initializer').that.is.a('function');
    });

    it('exposes the i18next module', function(){
      expect(main).to.have.property('i18next');
    });

  });
