
function myName(){
    console.log("ABC");
}

// myName()


// -------------------------------------------------
// function addTwoNums(num1, num2){
//     console.log(num1 + num2)
// }

function addTwoNums(num1, num2){
    let result = num1 + num2
    return result
    console.log("Hello");               // Hello is not executes becoz it is after return
}

// addTwoNums('1', 2)
// addTwoNums(3, 2)

const result = addTwoNums(5, 6)
console.log(result);

// --------------------------------------------------

function loginUserMessage(username = "john"){
    if(username === undefined){
        console.log("Enter Username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("xyz"))
console.log(loginUserMessage())


// --------------------------------------------------


function calculateCartPrice(val1, val2, ...num1){           // rest operator
    return num1
}

console.log(calculateCartPrice(20, 23, 21));

const user = {
    username : "ABC",
    price : "199"
}

function handleObject(anyObj){
    console.log(`username is ${anyObj.username} and price is ${anyObj.price}`);
}

// handleObject(user)
handleObject({
    username : "ABC",
    price : "199"
})


const myArr = [20, 23, 56]

function returnSecondValue(getArr){
    return getArr[2]
}
console.log(returnSecondValue(myArr))