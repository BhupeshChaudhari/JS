
class User{
    constructor(username){
        this.username = username
    }

    logMe(){
       console.log(`username is ${this.username}`); 
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
            this.email = email
            this.password = password
    }

    addCourse(){
        console.log(`New Course added by ${this.username}`);
    }
}

const newuser = new Teacher("xyz", "xyz@gmail.com", "1234")
console.log(newuser.addCourse());