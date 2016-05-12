'use strict';

const mySingleton = function(){
   
   let privateVariable = 'something private'

   function showPrivate() {
     console.log(privateVariable)
   }

   return {
     publicMethod: function () {
       showPrivate()
     },
     
     publicVar: 'The public can see this'
   }
}

const single = mySingleton()
single.publicMethod()
console.log(single.publicVar)
