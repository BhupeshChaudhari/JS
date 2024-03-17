const marvel_hero = ["thor", "ironman", "spiderman"]
const dc_hero = ["superman", "flash", "batman"]

// marvel_hero.push(dc_hero)
// console.log((marvel_hero));


const newConcatArr = marvel_hero.concat(dc_hero)       // Returns new array
// console.log(newConcatArr);                             // ['thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman']


const new_heros = [...marvel_hero, ...dc_hero]
// console.log(new_heros);


const array1 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_arr = array1.flat(1)
// const real_arr = array1.flat(2)
// const real_arr = array1.flat(Infinity)
console.log(real_arr);


console.log((Array.isArray("ABC")));        // false
console.log(Array.from("ABC"));             // converts into array ['A', 'B', 'C']
console.log(Array.from({name : "xyz"}))     // returns empty array


let a = 10
let b = 20
let c = 30
console.log(Array.of(a, b, c));
