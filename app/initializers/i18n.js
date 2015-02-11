import Ember from "ember";
import config from "../config/environment";
import requireDirectory from "ember-i18n/utils/require-directory";

import l from "ember-i18n/helpers/l";
import t from "ember-i18n/helpers/t";
import join from "ember-i18n/helpers/join";

const registerHelper = Ember.HTMLBars.registerHelper;
const makeBoundHelper = Ember.HTMLBars.makeBoundHelper;

export default {
  name: "ember-i18n",

  initialize: function () {
    registerHelper('l',    makeBoundHelper(l));
    registerHelper('join', makeBoundHelper(join));
    registerHelper('t',    makeBoundHelper(t));

    // Pull all locales from the project
    I18n.defaultLocale = config.LOCALE;

    let translations = I18n.translations = {};
    let locales = requireDirectory(config.modulePrefix, 'locale');
    let defaultLocale = locales.findProperty('name', I18n.defaultLocale);

    // Promote the default locale
    locales.removeObject(defaultLocale);
    locales.unshiftObject(defaultLocale);

    locales.forEach(function (module) {
      Ember.assert(`${module.fullName} must export a translation table.`, module.contents != null);
      let table = module.contents.default;
      translations[module.name] = table;
    });
  }
}
