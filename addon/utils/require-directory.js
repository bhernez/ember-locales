/* global require, requirejs */
import Ember from "ember";
var keys = Ember.keys;

export default function (modulePrefix, directory) {
  var globRegExp = new RegExp('^' + [modulePrefix, directory].join('/'));

  return keys(requirejs._eak_seen).filter(function(key) {
    return globRegExp.test(key);
  }).map(function(moduleName) {
    var parts = moduleName.split('/');
    var name = parts[parts.length - 1];
    return {
      fullName: moduleName,
      name: name,
      contents: require(moduleName, null, null, true)
    };
  });
}
