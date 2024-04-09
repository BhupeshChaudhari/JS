
class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(val){
        this._password = val
    }
    
    get email(){
        return this._email.toUpperCase()
    }
    set email(val){
        this._email = val
    }
}

const bup = new User("bhup@gmail.com", "abc")
console.log(bup.password);
console.log(bup.email);
