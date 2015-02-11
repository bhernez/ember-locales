import requireDirectory from 'ember-locales/utils/require-directory';

module('requireDirectory');

test('requiring a directory imports the directory returns the results', function() {
  var result = requireDirectory('ember-locales', 'utils');
  equal(result.length, 1);
  var module = result[0];
  equal(module.name, "require-directory");
  equal(module.fullName, "ember-locales/utils/require-directory");
  ok(module.contents);
});
