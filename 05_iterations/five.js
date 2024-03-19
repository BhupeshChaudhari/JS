
// for each

const coding = ['js', 'ruby', 'cpp', 'python']

coding.forEach( (item) => {
    console.log(item);
} )



function printMe(item){
    console.log(item);
}

coding.forEach(printMe)


coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})



// Obj inside array
const myCoding = [
    {
        languageName : 'java',
        languageFileName : 'java'
    },
    {
        languageName : 'python',
        languageFileName : 'py'
    },
    {
        languageName : 'c',
        languageFileName : 'c'
    }
]

myCoding.forEach( (item) => {

    console.log(`${item.languageName} : ${item.languageFileName}`);

})
