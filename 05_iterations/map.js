
const myNumns = [1,2,3,4,5,6,7,8,9]

const newNums = myNumns.map( (num) => {
    return num + 10
})
console.log(newNums);



const newNums1 = myNumns
            .map( (num) => num * 10)
            .map( (num) => num + 2 )        // result of first map (op -> [10,20,30,40,50,60,70,80,90]) is passed to second map
            .filter( (num) => num > 50)         

console.log(newNums1);



