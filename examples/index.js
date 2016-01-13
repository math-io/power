'use strict';

var pow = require( './../lib' );

var b;
var x;
var i;

for ( i = 0; i < 100; i++ ) {
	b = Math.round( Math.random()*10 );
	x = Math.round( Math.random()*10 ) - 5;
	console.log( '%d^%d = %d', b, x, pow( b, x ) );
}
