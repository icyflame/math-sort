/* global it */
'use strict';
var assert = require('assert');
var mathSort = require('./');

it('should sort an array', function () {
  assert.deepEqual(mathSort([100, 10, 20, 30, 1, 5]), [1, 5, 10, 20, 30, 100]);
});

it('should return undefined on anything other than arrays', function () {
  assert.deepEqual(mathSort(100, 10, 20, 30, 1, 5), undefined);
  assert.deepEqual(mathSort('some word here'), undefined);
  assert.deepEqual(mathSort(100), undefined);
});
