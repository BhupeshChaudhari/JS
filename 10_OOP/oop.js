const user = {
    username : "ABC",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        console.log("Got user details");
        console.log(`${this.username}`);    
        console.log(this);
    }
}

console.log(user.username)
console.log(user.getUserDetails())

console.log(this);


function User(username, count, isLoggedIn){
    this.username = username
    this.count = count
    this.isLoggedIn = isLoggedIn

    return this         // Not necessary to return it implicitly returns object
}

const userOne = new User("ABC", 11, true)
const userTwo = new User("XYZ", 10, false)
console.log(userOne);
console.log(userTwo);