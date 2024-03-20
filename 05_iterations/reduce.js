
// reduce

const myNums = [1,2,3,4]
const total = myNums.reduce( (acc, currval) => {
    console.log(acc, currval);
    return acc + currval
}, 0)
            // OR

// const total1 = myNums.reduce( (acc, currval) =>  acc + currval, 0)

console.log(total);