
function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email
        },
        set: function(value){
            this._email = value
        }
    })
}

const newUser = new User("abc@gmail.com", "rtyyeg")
console.log(newUser._email);


