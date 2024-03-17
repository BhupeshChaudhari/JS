// singleton -> Objects from Constructor

// Object.create

const mySym = Symbol("key1")

const jsUser = {
    name : "ABC",
    "full name" : "ABC XYZ",
    [mySym] : "mykey1",
    age : 20,
    location : "Dhule",
    email : "xyz@gmail.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday", "Wednesday"]
}

// console.log(jsUser.email);
// console.log(jsUser['email']);


// console.log(jsUser.full name);       // Not accessible 
console.log(jsUser['full name']);


console.log(typeof jsUser[mySym]);
console.log(jsUser[mySym]);


jsUser.email = "abc@abc.com"
// Object.freeze(jsUser)
jsUser.email = "abc@microsoft.com"
// console.log(jsUser);



jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greeting1 = function(){
    console.log(`Hello JS user ${this.name}`);
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greeting1());