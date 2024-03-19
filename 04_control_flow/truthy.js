
// const userEmail = "user@gmail.com"
const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else{
    console.log("dont have email");
}


// falsy value -
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
}


// Mullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10
val2 = undefined ?? 10

console.log(val1);
console.log(val2);


// Ternary Operator

const icePrice = 100
icePrice <= 80 ? console.log("less than 80") : console.log("more than 80");