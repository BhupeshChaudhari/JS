
const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);   
}


const prog = ["c", "cpp", "python"]
for (const key in prog) {
    console.log(prog[key]);
}