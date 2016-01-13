Exponential Function
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Exponential function][exponential-function].

The [exponential function][exponential-function] is defined as

<div class="equation" align="center" data-raw-text="y = b^x" data-equation="eq:exponential_function">
	<img src="https://cdn.rawgit.com/math-io/power/c5ea39264975847f4b71f268e7d5a678c2172f05/docs/img/eqn.svg" alt="Exponential function definition.">
	<br>
</div>

where `b` is the __base__ and `x` is the __exponent__.


## Installation

``` bash
$ npm install math-power
```


## Usage

``` javascript
var pow = require( 'math-power' );
```

#### pow( base, exponent )

Evaluates the [exponential function][exponential-function].

``` javascript
var val = pow( 2, 3 );
// returns 8

val = pow( 4, 0.5 );
// returns 2

val = pow( 100, 0 );
// returns 1

val = pow( Math.PI, 5 );
// returns ~306.0197

val = pow( Math.PI, -1/5 );
// returns ~0.7954

val = pow( NaN, 3 );
// returns NaN

val = pow( 5, NaN );
// returns NaN
```


## Examples

``` javascript
var pow = require( 'math-power' );

var b;
var x;
var i;

for ( i = 0; i < 100; i++ ) {
	b = Math.round( Math.random()*10 );
	x = Math.round( Math.random()*10 ) - 5;
	console.log( '%d^%d = %d', b, x, pow( b, x ) );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/math-power.svg
[npm-url]: https://npmjs.org/package/math-power

[build-image]: http://img.shields.io/travis/math-io/power/master.svg
[build-url]: https://travis-ci.org/math-io/power

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/power/master.svg
[coverage-url]: https://codecov.io/github/math-io/power?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/power.svg
[dependencies-url]: https://david-dm.org/math-io/power

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/power.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/power

[github-issues-image]: http://img.shields.io/github/issues/math-io/power.svg
[github-issues-url]: https://github.com/math-io/power/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io/
[exponential-function]: https://en.wikipedia.org/wiki/Exponential_function
