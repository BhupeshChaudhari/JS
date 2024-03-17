const score = 19
console.log(score);

const balance = new Number(101.983)
console.log(balance);

console.log(balance.toString());    
console.log(balance.toFixed(2));

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));

const hundreads = 1000000
console.log(hundreads.toLocaleString('en-IN'));


// ========================= MATHS ================================

console.log(Math.PI);
console.log(Math.PI.toFixed());

console.log(Math.abs(-4));

console.log(Math.round(4.4));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.7));

console.log(Math.min(2,3,4,3,2,6,7));
console.log(Math.max(6,5,7,8,3,2));


console.log(Math.random());
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)) + min)

