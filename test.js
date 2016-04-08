var RequirePatch = require('./');

RequirePatch.patch(function(globalRequire) {
  globalRequire.patched = function() {};
});

a = require('./test/a');
a.test();

B = require('./test/b');
b = new B
b.test();

console.log("PATCH SUCCESSFUL!");