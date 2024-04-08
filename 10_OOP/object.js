
function myFun(num){
    return num * 5
}

myFun.power = 2

console.log(myFun(5));
console.log(myFun.power);
console.log(myFun.prototype);


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const tea = new createUser("Tea", 25)
const tea2 = new createUser("Tea2", 40)

tea.printMe()

createUser.printMe()