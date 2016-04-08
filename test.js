var RequirePatch = require('./');

RequirePatch.patch(function(globalRequire) {
  globalRequire.patched = function() {};

  var extend = require('extend');
  globalRequire.copy = function(path) {
    return extend(true, globalRequire(path), {});
  };
});

a = require('./test/a');
a.test();

console.log("TESTS SUCCESSFUL!");