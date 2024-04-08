
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const bhup = new User("ABC")
// console.log(bhup.createId());

class Techer extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Techer("iphone", "i@phone.com")
console.log(iphone.createId());