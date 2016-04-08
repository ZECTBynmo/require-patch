var path = require('path');
var Module = require('module');

var runInNewContext = require('vm').runInNewContext;
var runInThisContext = require('vm').runInThisContext;

var RequirePatch = {
  patch: function(patchFn) {
    var _compileStr = Module.prototype._compile.toString();

    modulePatcher = this.modulePatchRequire;

    Module.prototype.patchRequire = function(require) {
      modulePatcher(require, patchFn);
    };

    _compileStr = _compileStr.slice(0, _compileStr.lastIndexOf('return'))
      + "self.patchRequire(require);\n  "
      + _compileStr.slice(_compileStr.lastIndexOf('return'));

    var patchedCompile = eval('(' + _compileStr + ')');
    Module.prototype._compile = function(content, filename) {
      return patchedCompile.call(this, content, filename);
    };
  },

  modulePatchRequire: function(requireToPatch, patchFn) {
    patchFn(requireToPatch);
  }
};

module.exports = RequirePatch;