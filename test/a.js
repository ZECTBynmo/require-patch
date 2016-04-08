module.exports.test = function() {
  require.patched();

  B = require.copy('./b');
  b = new B();
  b.test();
}