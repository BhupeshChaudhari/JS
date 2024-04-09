
const pi = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(pi);

// console.log(Math.PI);
// Math.PI = 5             // we does not overwrite its value
// console.log(Math.PI);


const newObj = {
    name : "ABC",
    price : 250,
    isAvailable : true
}

const val = Object.getOwnPropertyDescriptor(newObj, "name")
console.log(val);

Object.defineProperty(newObj, "name", {writable: false})
const val1 = Object.getOwnPropertyDescriptor(newObj, "name")
console.log(val1);


