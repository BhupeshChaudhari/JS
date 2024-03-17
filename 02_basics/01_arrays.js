// Array

const myArr = [0, 1, 2, 3, 4, 5]

const myArr1 = [0, 1, 2, 3, 4, 5, true, "ABC"]  // Mix datatypes

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[5]);

// Array Methods

// myArr.push(6)        // Add elemenet at last index
// myArr.push(7)
// myArr.pop()          // removes last element

// myArr.unshift(9)     // Add 9 at first position
// myArr.shift()           // remove first element

// console.log(myArr.includes(5));     // checks whether 5 is present in array or not -> o/p true or false (boolean)
// console.log(myArr.indexOf(8));     

// const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)      // op -> converts arr(obj) into string(csv)

//// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)      // original array is not manipulated 
console.log(myn1);                  // op -> [1,2]  --> (1,3) elements at 1 and 2. 3 is excluded
console.log("B ", myArr);           // op -> og array as it is

const myn2 = myArr.splice(1,3)      // original array is manipulated 
console.log("C ", myArr);           // op -> [0, 4, 5]  --> element at 1,2,3 postion extracted from og array
console.log(myn2);                  // op -> [1,2,3]