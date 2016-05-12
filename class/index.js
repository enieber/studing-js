const Car = require('./car')

const myCar = new Car('Fiat', 2016, 20)
const civic = new Car("Honda Civic", 2009, 20000)
const mondeo = new Car("Ford Mondeo", 2010, 5000)
console.log(myCar.toString())
console.log(civic.toString())
console.log(mondeo.toString())

const newObject = {}
console.log(typeof newObject)

const nObject = Object.create(null)
console.log(typeof nObject)

const objectn = new Object()
console.log(typeof objectn)

Object.defineProperty(newObject, 'someKey', {
   value: 'for more control of the property',
   writable: true,
   enumerable: true,
   configurable: true
})
console.log(newObject)

//const defineProp = function (obj, key, value){
//   config.value = value
//   Object.defineProperty(obj, key, config)
//}
//const man = Object.create(null)
//defineProp(man, 'car', 'Delorea')
//defineProp(man, 'dob', '1981')
//defineProp(man, 'beard', false)

