"use strict" // treats all js code as ModernJS code 

// alert(5 + 2)  Nodejs Environment

console.log(    3 
        +
                        3
                                );
    console.log(         "Hello"                
            
    )           // NO Code Readability (Bad Practice)

let age = 18
let name = "Sam"
let isLoggedIn = false
let undefinedValue = undefined
let nullValue = null
let bigintValue = 2357901250915125n

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

console.log(typeof "string")
console.log(typeof(isLoggedIn))
console.log(typeof null)
console.log(typeof undefined)

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const bigInt = 123135325235464335n

const heros = ['Iron Man', 'Captain America', 'Spider Man']
const myObj = {
        name: "Akshay",
        age: 7
}
const myFunction = function() {
        console.log("Hello World")
}
console.log(typeof heros, typeof myObj,typeof myFunction)