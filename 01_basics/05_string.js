const name = "Bhupesh"
const repoCount = 50

// console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameNew = new String("ABC-YYZZY")   // 0-A 1-B 2-C

console.log(gameNew[0]);
console.log(gameNew.length);
console.log(gameNew.toUpperCase());
console.log(gameNew.charAt(2));
console.log(gameNew.indexOf('B'));

const newString = gameNew.substring(0, 4)   // last number(4) is not include mean 0 to 3 
console.log(newString);                     // no negative number

const anotherString = gameNew.slice(-8, 4)
console.log(anotherString);

const newString1 = "    xyz    "
console.log(newString1);
console.log(newString1.trim());

const url = "https://brc.com/brc%20hhkbdch"
console.log((url.replace('%20', '-')));
console.log(url.includes('brc'));

console.log(gameNew.split("-"));    // array of spillted words due to -

