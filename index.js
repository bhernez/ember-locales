/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-i18n',
  included: function (app) {
    this._super.included(app);
    app.import('bower_components/i18n-js/vendor/assets/javascripts/i18n.js');
  }
};
