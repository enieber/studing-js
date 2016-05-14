'use strict';

const meanAbsDev = {
    size: function(arr){
      return arr.length;
    },
    sumArray: function(arr){
      return arr.reduce(function(sum, element){
        return sum += element;
      });
    },
    average: function(arr){
     return this.sumArray(arr)/this.size(arr);
    },
    calc: function(arr){
      let dev = arr.map(function(el){
        return Math.abs(el - meanAbsDev.average(arr));
      });

      return this.average(dev);
    }
}

const arry = [1,2,3];
console.log(meanAbsDev.calc(arry));
