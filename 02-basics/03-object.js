// singleton
// Object.create

// object literals (not singleton)

const mySym = Symbol("key1")

const emptyObject = {}
const jsUser = {
    name: "JavaScript",
    "full name": "Java Script",
    [mySym]: "mykey1",
    age: 18,
    location: "Pune",
    email: "example@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])
console.log(typeof jsUser[mySym])

jsUser.email = "example@yahoo.com"
// Object.freeze(jsUser)
jsUser.email = "example@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user")
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
 }

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
console.log(jsUser.greeting)