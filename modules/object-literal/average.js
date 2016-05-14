'use strict';
const sumArray = require('./sum');

function average(arr){
  return sumArray(arr)/arr.length;
}

module.exports = average;
