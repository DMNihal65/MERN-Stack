let a = 1;
var b = 2;
console.log(a)
console.log(b)

let name = "Nihal"
let age = 18
let ismarried = false;


console.log(`first name ${name} and the age is ${age}`)

//if else
if(ismarried){
    console.log(`first name ${name} is married`)
}
else{
    console.log("not married")
}

let ans = null
//loops
for(let i=0;i<100;i++){
    ans=ans+i
}

console.log(ans)

//Arrays

const person = ["John", "nihal","dm"]
console.log(person[1])//nihal

//objects

const user1 ={
    name : "nihal",
    gender : "male",
}
console.log(user1.name)//or
console.log(user1["name"])



//functions

//find sum

function findSum(a,b){
    return a+b
}
console.log(findSum(10,30))

// let sum =0;
// for(let i=0;i<10000000000;i++){
//     sum=sum+1
// }

// console.log(sum)


//Function can take functions as input
//Function call backs



// function sum(num1,num2){
//     let result = num1+num2;
//     return result;

// }

// function displayresult(data){
//     console.log("Result of the sum is : " + data)
// }

// function displayresultinpassive(data){
//     console.log("Sums result is : " + data)
// }

//You are only allowed to call only one function after this and print the sum how can we do it?
//using call back function where we can call a function inside a function.


function sum(num1,num2,funtocall){
    let result = num1+num2;
    // return result;
    funtocall(result)

}

function displayresult(data){
    console.log("Result of the sum is : " + data)
}

function displayresultinpassive(data){
    console.log("Sums result is : " + data)
}

//single function call
const answer =sum(1,2,displayresult)//call a function or send a function as an argument



//settimeout
function great(){
    console.log("Hello")
}

setTimeout(great,3*1000)