// 1. primitive data type

// they are call by value  
// in this data types anything we chnages , the change is happen in the copy not in the original place
// 7 types : String, Number , Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 54654876546546846546n


// 2. Reference type (Non Primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "yummy", "daga"]

// objects are in curlybraces always
let myobj = {
    name: "mayank",
    age:22,
}
// console.log(myobj);


const myFunction = function(){
    console.log("Hello World");
    
}

// in this notes we have to check the data types by using typeof or cna be read on ecma or mdn


