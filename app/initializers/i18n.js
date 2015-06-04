import Ember from "ember";
import config from "../config/environment";
import requireDirectory from "ember-locales/utils/require-directory";

import l from "ember-locales/helpers/l";
import t from "ember-locales/helpers/t";
import join from "ember-locales/helpers/join";

var registerHelper = Ember.HTMLBars._registerHelper || Ember.HTMLBars.registerHelper;
var makeBoundHelper = Ember.HTMLBars.makeBoundHelper;

export default {
  name: "ember-locales",

  initialize: function () {
    registerHelper('l',    makeBoundHelper(l));
    registerHelper('join', makeBoundHelper(join));
    registerHelper('t',    makeBoundHelper(t));

    // Pull all locales from the project
    I18n.defaultLocale = config.LOCALE;

    var translations = I18n.translations = {};
    var locales = requireDirectory(config.modulePrefix, 'locale');
    var defaultLocale = locales.findProperty('name', I18n.defaultLocale);

    // Promote the default locale
    locales.removeObject(defaultLocale);
    locales.unshiftObject(defaultLocale);

    locales.forEach(function (module) {
      if(module){
        Ember.assert(`${module.fullName} must export a translation table.`, module.contents != null);
        var table = module.contents.default;
        translations[module.name] = table;
      }
    });
  }
}
