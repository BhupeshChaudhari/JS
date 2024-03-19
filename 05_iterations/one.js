// for loop

for (let i = 0; i <= 10; i++) {
    const element = i
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
    
}

// console.log(element);       // error : out of scope


for (let i = 1; i <= 10; i++) {
    console.log(`Outer Loop ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
        
    }
}



let myArr = ["abc", "xyz", "lmn"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}



// break and continue

for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        break
        
    }
    console.log(`value of i ${index}`);    
}

for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue
        
    }
    console.log(`value of i ${index}`);    
}