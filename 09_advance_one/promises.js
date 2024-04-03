
const promisOne = new Promise(function(resolve, reject){
    // Do an async task
    //DB calls, cryptography, newtwork
    setTimeout(function(){
        console.log("Async task completed");
        resolve()
    }, 1000)
})

promisOne.then(function(){
    console.log("Promise Consumed");
})




new Promise(function(resolve, reject){
    // Do an async task
    //DB calls, cryptography, newtwork
    setTimeout(function(){
        console.log("Async task 2 completed");
        resolve()
    }, 1000)
}).then(function(){
    console.log("task 2 Consumed");
})




const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"abc19", email:"abc@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})




const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"ABC", pass:"122hvbxc"})
        }else{
            reject("ERROR : something went wrong")
        }
    }, 1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then(function(myUsername){
    console.log(myUsername)
})
.catch(function(error){
    console.log(error);
})
.finally(()=>{
    console.log("finally block");
})



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"javascript", pass:"122hvbxc"})
        }else{
            reject("ERROR : JS went wrong")
        }
    }, 3000)
})

async function ConsumePromiseFive(){
    try {
        const reponse = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
ConsumePromiseFive()