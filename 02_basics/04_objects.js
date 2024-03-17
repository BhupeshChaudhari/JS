const tinderUser = new Object()     // Singleton obj
// const tinderUser = {}            // Non-Singleton obj

tinderUser.id = "101A"
tinderUser.name = "John"
tinderUser.isLoggedIn = false

console.log((tinderUser));      // empty object



const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "john",
            lastname : "abc"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2)
const obj31 = {...obj1, ...obj2}
console.log(obj3);
console.log(obj31);



console.log(Object.keys(tinderUser));       // array of keys
console.log(Object.values(tinderUser));     // array of values
console.log(Object.entries(tinderUser));


