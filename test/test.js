'use strict';

var assert = require('assert');
var proglang = require('../proglang');


it('should be an array', function () {
    assert(proglang, Array.isArray(), 'this');
});

it('length should be 256', function () {

   assert.equal(proglang.length, 256);
});


