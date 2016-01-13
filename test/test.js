'use strict';

// MODULES //

var test = require( 'tape' );
var abs = require( 'math-abs' );
var pow = require( './../lib' );


// TESTS //

test( 'main export is a function', function test( t ) {
	t.ok( typeof pow === 'function', 'main export is a function' );
	t.end();
});

test( 'the function accepts two parameters: a base and an exponent', function test( t ) {
	t.equal( pow.length, 2, 'arity is 2' );
	t.end();
});

test( 'the function evaluates the exponential function', function test( t ) {
	var delta;

	t.equal( pow( 2, 3 ), 8, '2^3 = 8' );
	t.equal( pow( -5, 3 ), -125, '(-5)^3 = -125' );

	// Compared against Julia:
	delta = abs( pow( Math.PI, 5 ) - 306.0196847852814 );
	t.ok( delta < 1e-14, 'pi^5 ~ 306.0196847852814' );

	t.end();
});

test( 'the function evaluates the exponential function when provided fractional exponents', function test( t ) {
	var delta;

	t.equal( pow( 16, 0.5 ), 4, '16^0.5 = 4' );

	delta = abs( pow( 125, 1/3 ) - 5 );
	t.ok( delta < 1e-14, '125^1/3 ~= 5' );

	// Compared against Julia:
	delta = abs( pow( Math.PI, -1/5 ) - 0.7953715005639397 );
	t.ok( delta < 1e-14, 'pi^0.2 ~ 0.7953715005639397' );

	t.end();
});

test( 'anything raised to the zero power is `1`', function test( t ) {
	t.equal( pow( Number.POSITIVE_INFINITY, 0 ), 1, 'inf^0 = 1' );
	t.equal( pow( Number.NEGATIVE_INFINITY, 0 ), 1, '(-inf)^0 = 1' );
	t.equal( pow( 0, 0 ), 1, '0^0 = 1' );
	t.equal( pow( 100, 0 ), 1, '100^0 = 1' );
	t.end();
});

test( 'one raised to any power is `1`', function test( t ) {
	t.equal( pow( 1, Number.POSITIVE_INFINITY ), 1, '1^inf = 1' );
	t.equal( pow( 1, Number.NEGATIVE_INFINITY ), 1, '1^(-inf) = 1' );
	t.equal( pow( 1, 0 ), 1, '1^0 = 1' );
	t.equal( pow( 1, 1000 ), 1, '1^100 = 1' );
	t.end();
});

test( 'the function returns `+infinity` if a positive number is raised to `+infinity`', function test( t ) {
	var val = pow( 5, Number.POSITIVE_INFINITY );
	t.equal( val, Number.POSITIVE_INFINITY, 'returns +infinity' );
	t.end();
});

test( 'the function returns `+infinity` if a negative number is raised to `+infinity`', function test( t ) {
	var val = pow( -5, Number.POSITIVE_INFINITY );
	t.equal( val, Number.POSITIVE_INFINITY, 'returns +infinity' );
	t.end();
});

test( 'the function returns `+infinity` if `-infinity` is raised to `+infinity`', function test( t ) {
	var val = pow( Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY );
	t.equal( val, Number.POSITIVE_INFINITY, 'returns +infinity' );
	t.end();
});

test( 'the function returns `0` if a positive number is raised to `-infinity`', function test( t ) {
	var val = pow( 5, Number.NEGATIVE_INFINITY );
	t.equal( val, 0, 'returns 0' );
	t.end();
});

test( 'the function returns `0` if `+infinity` is raised to `-infinity`', function test( t ) {
	var val = pow( Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY );
	t.equal( val, 0, 'returns 0' );
	t.end();
});

test( 'the function returns `0` if a negative number is raised to `infinity`', function test( t ) {
	var val = pow( -5, Number.NEGATIVE_INFINITY );
	t.equal( val, 0, 'returns 0' );
	t.end();
});

test( 'the function returns `NaN` if asked to raise a negative number to a exponent whose absolute value is greater than 0 but less than 1', function test( t ) {
	var val;

	val = pow( -125, 1/3 );
	t.ok( val !== val, 'returns NaN' );

	val = pow( -16, -1/2 );
	t.ok( val !== val, 'returns NaN' );

	t.end();
});

test( 'the function returns `NaN` if provided a `NaN` for the exponent', function test( t ) {
	var val = pow( -3, NaN );
	t.ok( val !== val, 'returns NaN' );
	t.end();
});

test( 'the function returns `NaN` if provided a `NaN` for the base', function test( t ) {
	var val = pow( NaN, 5 );
	t.ok( val !== val, 'returns NaN' );
	t.end();
});
