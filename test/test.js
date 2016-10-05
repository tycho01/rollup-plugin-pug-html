var rollup = require('rollup').rollup;
var assert = require('assert');
var _pug   = require('../');
var pug_plugin_ng = require('pug-plugin-ng');

process.chdir(__dirname);

function executeBundle (bundle) {
  var result = bundle.generate({
    format: 'cjs'
  });
  var fn = new Function('require', 'module', 'assert', result.code);
  var module = {};
  fn(require, module, assert);
  return module;
}

describe('rollup-plugin-pug', function () {

  it('compiles pug templates to funcions', function () {
    return rollup({
      entry: 'samples/basic/main.js',
      plugins: [ _pug({
        context: { name: 'World' },
      }) ],
    }).then(executeBundle);
  });

  it('inserts the includes into template', function () {
    return rollup({
      entry: 'samples/include/main.js',
      plugins: [ _pug({
        context: { title: 'My Site' },
      }) ],
    }).then(executeBundle);
  });

  it('can deal with pug plugins', function () {
    return rollup({
      entry: 'samples/options/main.js',
      plugins: [ _pug({
        plugins: [pug_plugin_ng],
      }) ],
    }).then(executeBundle);
  });

});
