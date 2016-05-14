'use strict';
const average = require('./average');

function desvioPadrao(arr){
  let sizeArray = arr.length; 
  let media = average(arr);
  let sum = arr.reduce(function(a, b){
    return a += b;
  });
  var devList = arr.map(function(elem) {
                     return Math.abs(elem - meanAbsDev.ave(list));
               });
               return meanAbsDev.ave(devList);
  return dev/sizeArray;
};

console.log(desvioPadrao([1,2,3,4]));
