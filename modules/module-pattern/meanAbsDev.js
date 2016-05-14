'use strict';                                                                                
         
const meanAbsDev = (function(){
  let size = function(arr){
    return arr.length;
  };

  let sumArray = function(arr){
    return arr.reduce(function(sum, element){
      return sum += element;
    });
  }

  let average = function(arr){
    return sumArray(arr)/size(arr);
  }

  return { 
    calc: function(arr){
      let dev = arr.map(function(el){
        return Math.abs(el - average(arr));
      });
            
     return average(dev);
    }
  }
})();        
 
const arry = [1,2,3];
console.log(meanAbsDev.calc(arry));
