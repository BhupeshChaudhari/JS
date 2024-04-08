
class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    capUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const newuser = new User("abc", "acb@gmail.com", "123")
console.log(newuser.encryptPassword());
console.log(newuser.capUsername());