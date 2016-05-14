'use strict';

module.exports = function sumArray(arr){
  return arr.reduce(function(a, b){
    return parseFloat(a) + parseFloat(b);
  });                                       
} 

