'use strict';

function mToCm(m){
   let op = m * 100
   return op
}

function cmToPes(cm){
   let op = cm/30.48
   return op
}

function pesToJauler(pes){
   let op = pes/3
   return op
}

function mToJauler(m){
  return pesToJauler(cmToPes(mToCm(m)))
}
