
// let myName = "Bhupesh     "

// console.log(myName.trueLength);

let arr = ['thor', 'spiderman']

let obj = {
    thor : "hammer",
    spidernam : 'sling',

    getSpiderPower : function(){
        console.log(`spidy power is ${this.spidernam}`);
    }

}

Object.prototype.bhup = function(){
    console.log("bhup is present in all obj");
}

obj.bhup()
arr.bhup()      // becoz array is a object 


Array.prototype.heyy = function(){
    console.log("Hey Bhupesh");
}

arr.heyy()
// obj.heyy()    Error