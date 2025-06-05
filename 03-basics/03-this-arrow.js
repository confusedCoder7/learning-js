const user = {
    username: "JavaScript",
    price: 245,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this)

function abc(){
    let username = "hitesh"
    // console.log(this.username)
    // console.log(this)
}
abc()

const xyz = function () {
    let username = "JavaScript"
    // console.log(this.username)
    // console.log(this)
}
xyz()

const chai = () => {
    let username = "JavaScript"
    // console.log(this.username)
    console.log(this)
}
chai()

const arrow1 = (num1, num2) => {
    return num1 + num2
}
const arrow2 = (num1, num2) =>  num1 + num2
const arrow3 = (num1, num2) => ( num1 + num2 )
const arrow4 = (num1, num2) => ({username: "hitesh"})

console.log(arrow3(3, 4))