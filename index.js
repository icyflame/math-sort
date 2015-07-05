'use strict';
module.exports = function (inputArr) {
  if (Array.isArray(inputArr)) {
    inputArr.sort(function (a, b) {
      return a - b;
    });

    return inputArr;
  } else {
    return undefined;
  }
};
