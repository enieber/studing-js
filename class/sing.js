'use strict';

const Singleton = (function () {
   let instantiated;
   
   function init() {
	// singleton here
     return {
       publicMethod: function () {
         console.log('hello world');
       },
       publicProperty: 'test'
     };
   }

   return {
     getInstance: function () {
       if (!instantiated) {
         instantiated = init();
       }
       return instantiated;
     }
  };
})();

Singleton.getInstance().publicMethod();
