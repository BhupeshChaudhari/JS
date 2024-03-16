
// 1. Primitive Datatype (Call by value --> Copy of data does not provide actual ref)

//     String  -> string
//     number  -> number
//     boolean -> boolean
//     null -> Object
//     undefined -> undefined
//     symbol -> symbol

// 2. Non- Primitive (Reference Type) (call by reference --> actual ref provided)

//     Array -> Object
//     Object -> Object
//     Functions -> Function

// ================================================================================================

// Stack (primitive) , Heap (Non-Primitive)

let name1 = "Bhupesh"
let anotherName = name1

anotherName = "XYZ"

console.log(anotherName);
console.log(name1);

let userOne = {
    email : "abc@gmail.com",
    id : "101",
}

let userTwo = userOne

userTwo.email = "xyz@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
