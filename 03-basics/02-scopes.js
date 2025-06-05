//var c = 300   
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a)
}
// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "JavaScript"
    function two(){
        const website = "google"
        console.log(username)
    }
    // console.log(website)
    two()
}
one()

if (true) {
    const username = "JavaScript"
    if (username === "JavaScript") {
        const website = " google"
        console.log(username + website)
    }
    console.log(website)
}
console.log(username)

console.log(addOne(5))

function addOne(num){
    return num + 1
}



// addTwo(5)
const addTwo = function(num){
    return num + 2
}

console.log(typeof addOne, typeof addTwo)
console.log(addOne, addTwo)