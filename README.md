[![Build Status][build-image]][build-url]
[![npm Version][npm-image]][npm-url]
[![License][license-image]][license-url]

# rollup-plugin-pug

[Rollup](https://github.com/rollup/rollup) plugin that allows importing [pug](https://pugjs.org/) templates as HTML strings.

## Installation

```bash
npm install --save-dev rollup-plugin-pug-html
```

## Usage

Create the template:

```jade
//- template.pug
p Hello #{ name }
```

Import the template:

```js
// main.js
import html from './template.pug';
console.log(html);  // <p>Hello World</p>
```

And build with something like...

```js
import { rollup } from 'rollup';
import pug from 'rollup-plugin-pug';

rollup({
  entry: 'src/main.js',
  plugins: [
    pug({
      // By default, all .jade and .pug files are compiled
      // extensions: [ '.jade', '.pug' ],
      // You can restrict which files are compiled
      // using `include` and `exclude`
      include: 'src/components/**.pug',
      // You can use native pug options as well.
      pretty: true,
      // You can also pass context for the Pug variables:
      context: { name: 'World' },
    })
  ]
}).then(...)
```

That's it.

## Options

This plugin is using the following pug options as defaults:

```js
{
  doctype: 'html',
  name: 'template',
  compileDebug: false,
  inlineRuntimeFunctions: false,
  context: {},
}
```

See the full list and explanation in the [API Documentation](https://pugjs.org/) of the Pug site.

## Licence

MIT

[build-image]:    https://img.shields.io/travis/tycho01/rollup-plugin-pug-html.svg
[build-url]:      https://travis-ci.org/tycho01/rollup-plugin-pug-html
[npm-image]:      https://img.shields.io/npm/v/rollup-plugin-pug-html.svg
[npm-url]:        https://www.npmjs.com/package/rollup-plugin-pug-html
[license-image]:  https://img.shields.io/npm/l/express.svg
[license-url]:    https://github.com/tycho01/rollup-plugin-pug-html/blob/master/LICENSE
