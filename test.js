/* global it */
'use strict';
var assert = require('assert');
var mathSort = require('./');

it('should sort an array', function () {
  assert.deepEqual(mathSort([100, 10, 20, 30, 1, 5]), [1, 5, 10, 20, 30, 100]);
});

it('should sort a set of numbers', function () {
  assert.deepEqual(mathSort(100, 10, 20, 30, 1, 5), undefined);
});
