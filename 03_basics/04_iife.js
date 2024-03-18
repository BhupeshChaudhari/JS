// Immediately Invoke Function Expressions (IIFE)

// function chai(){
//     console.log("DB Connected");
// }
// chai()

( function chai(){
    console.log("DB Connected");
} ) ();


( () => {
    console.log("DB Connected two");
} ) ();


( (name) => {
    console.log(`name : ${name}`);
} ) ("ABC");