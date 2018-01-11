# mochi
dead-simple way to require mocha + chai

two great tastes which taste great together

I'm just going to copy and paste the implementation into this readme so you know what you get:

```js
require('mocha')
var chai = require('chai')
chai.use(require('chai-interface'))
chai.should()

module.exports = chai
```

## usage
at the top of your test files, throw
```js
require('mochi')
```

from there, just use mocha + chai like you normally would

## installation
```
$ npm install --save-dev mochi
```

## why

I like to make dependencies explicit. I found myself getting lazy and not typing `require('mocha')` at the top of my tests. I would type a `require('chai')` because I had to. This lets me type just one require, but still be explicit. this is like a symlink for my regular testing patterns.

## contributions
feel free to open an issue

## license
by jden <jason@denizac.org> - ISC license