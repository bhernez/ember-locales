/* global require, requirejs */
import Ember from "ember";
const keys = Ember.keys;

export default function (modulePrefix, directory) {
  let globRegExp = new RegExp('^' + [modulePrefix, directory].join('/'));

  return keys(requirejs._eak_seen).filter(function(key) {
    return globRegExp.test(key);
  }).map(function(moduleName) {
    let parts = moduleName.split('/');
    let name = parts[parts.length - 1];
    return {
      fullName: moduleName,
      name: name,
      contents: require(moduleName, null, null, true)
    };
  });
}
