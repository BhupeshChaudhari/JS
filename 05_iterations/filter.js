
const coding = ['js', 'ruby', 'cpp', 'python']

const values = coding.forEach( (item) => {
    // console.log(item);
    return item
})

// console.log(values);     // op -> undefineed


const myNumns = [1,2,3,4,4,5,6,7,8,9,10]

const newNums = myNumns.filter( (num) => {
    return num > 4
} )
                // OR 
// const newNums = myNumns.filter( (num) => num > 4)

console.log(newNums);

// using for each loop
const nums = []
myNumns.forEach( (num) => {
    if (num > 4) {
        nums.push(num)
    }
})

console.log(nums);


