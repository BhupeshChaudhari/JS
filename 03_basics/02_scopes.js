
var c = 200
let a = 300

if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("inside if : ",a);
}

console.log(a);
// console.log(b);
console.log(c);



function one(){
    const username = "ABC"

    function two(){
        const wensite = "youtube"
        console.log(username);
    }
    // console.log(Website);

    two()
}

one()



if (true) {
    const username = "XYZ"
    if (username === "XYZ") {
        const website = " yt"
        console.log(username + website);
        
    }
    // console.log(website);        // not accessible
    
}

// console.log(username);           // not accessible



// ====================== Interesting ================================

console.log(addone(5))
function addone(num){
    return num + 1
}

console.log(addTwo(6))
const addTwo = function(num){
    return num + 2
}

