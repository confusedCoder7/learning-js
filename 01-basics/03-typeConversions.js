console.table([typeof 4, typeof "", typeof true, typeof null, typeof undefined, typeof 1341346146146n, typeof Symbol('25')])

let score = "33"
console.log(typeof score)
console.log(typeof(score))

score = "33abc"
score = null
score = undefined
score = true

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

let number = 1
number = ""
number = null
console.log(Boolean(number))

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);