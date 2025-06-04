const arr = [11, 22, 33, 44, 55]
const myHeros = ['Iron Man', 'Captain America', 'Spider Man']

const myArr = new Array(23, 34, 45, 56)
console.log(myArr[1])

myArr.push(67)
myArr.push(7)
myArr.pop()

myArr.unshift(9)
myArr.shift()

console.log(myArr.includes(9))
console.log(myArr.indexOf(3))

const newArr = myArr.join()

console.log(myArr)
console.log(newArr)
console.log(typeof newArr)

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);