
function sayMyName(){
    console.log("J");
    console.log("a");
    console.log("v");
    console.log("a");
    console.log("S");
    console.log("c");
    console.log("r");
    console.log("i");
    console.log("p");
    console.log("t");
}

sayMyName()

function sum(number1, number2){
    console.log(number1 + number2)
}

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
    return number1 + number2
}
const result = addTwoNumbers(3, 5)
console.log("Result: ", result)


function loginUserMessage(username = "sam"){
    if(!username){
        return "PLease enter a username"
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("JavaScript"))
console.log(loginUserMessage())


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "JavaScript",
    prices: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500, 1000]))