const score = 700
console.log(score)
console.log(typeof score)

const balance = new Number(500)
console.log(balance)
console.log(typeof balance)

console.log(balance.toString().length)
console.log(balance.toFixed(3))

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3))

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-US'))
console.log(hundreds.toLocaleString('en-IN'))

console.log(Number.MIN_VALUE, Number.MAX_VALUE)

console.log(Math)
console.log(Math.abs(-6))
console.log(Math.round(4.7))
console.log(Math.ceil(4.0001))
console.log(Math.floor(4.99999999))
console.log(Math.min(4, 5, -7, -99))
console.log(Math.max(4, 5, -7, -99))
console.log(Math.random())
