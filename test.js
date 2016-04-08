var RequirePatch = require('./');

RequirePatch.patch(function(globalRequire) {
  globalRequire.patched = function() {};
});

a = require('./test/a');
a.test();

console.log("PATCH SUCCESSFUL!");