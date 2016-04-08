# require-patch

Patch the global nodejs require hook

## Installation

`npm install require-patch`

## Usage

Let's say you want to setup a function that copies files when they're required, you might want to use it like this

usage.js
```JS
var copied = require.copy('./myjsonfile.json');
```

Here's how you'd set that up in your main app file

main.js
```JS
extend = require('extend');
var patcher = require('reuqire-patch');

patcher.patch(function(globalRequire) {
  globalRequire.copy = function(filepath) {
    return extend(true, {}, globalRequire(filepath));
  }
});

usage = require('./usage');
```

### Note: Only works in native node environments that don't do static preprocessing of require()'s (Mocha, webpack, etc. don't work)