import Ember from "ember";
import config from "../config/environment";
import requireDirectory from "ember-i18n/utils/require-directory";

import l from "ember-i18n/helpers/l";
import t from "ember-i18n/helpers/t";
import join from "ember-i18n/helpers/join";

var registerHelper = Ember.HTMLBars.registerHelper;
var makeBoundHelper = Ember.HTMLBars.makeBoundHelper;

export default {
  name: "ember-i18n",

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
      Ember.assert(`${module.fullName} must export a translation table.`, module.contents != null);
      var table = module.contents.default;
      translations[module.name] = table;
    });
  }
}
