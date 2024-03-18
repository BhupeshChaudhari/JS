
const user = {
    username : "ABC",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);

    }

}

// user.welcomeMessage()
// user.username = "xyz"
// user.welcomeMessage()

console.log(this);         // op -> {}



// function chai(){

//     let username = "ABC"
//     console.log(this);
//     console.log(this.username);      op -> undefined
// }

// chai()

// ========================== ARROW FUNC ==================================

const chai1 = () => {
    let username = "ABC"
    console.log(this);
}

chai1()

// ----------------------------------

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
            
            // OR //

// const addTwo = (num1, num2) => num1 + num2
            // OR //
// const addTwo = (num1, num2) => (num1 + num2)        // () means do not explicitly need to write return

const addTwo = (num1, num2) => ({username : "xyz"})

console.log(addTwo(3, 4));






