// if

const isUserLoggedIn = true
const temp = 41

if (temp < 50) {
    console.log("true");
}

// <,  >, <=, >=, ==, !=, ===, !==

const score = 200

if(score > 100){
    const power = "fly"
    console.log(`User Power: ${power}`);
}
// console.log(`User Power: ${power}`);        // Error due to scope



const balance = 1000
if(balance > 500) console.log("test");

if (balance < 500) {
    console.log("Less than 500");
} else if (balance < 750) {
    console.log("less than 750");
}else if(balance < 900){
    console.log("less than 900");
}else{
    console.log("Less than 1200");
}




const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("Logged In");
}