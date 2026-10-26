const user = {
    username : "xyz" ,
    price : 999 ,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "abc"
// user.welcomeMessage()
    //console.log(this);



// function one(){
//     let username = "xyz"
//     console.log(this.username);
// }
// one()


// const one = function(){
//     let username = "xyz"
//     console.log(this.username);
// }
// one()


const one = () => {
    let username = "xyz"
    console.log(this.username);
}
//one()


//const addTwo = (num1 , num2) => {
//    return num1 + num2
//}

//const addTwo = (num1 , num2) => num1 + num2
//const addTwo = (num1 , num2) => (num1 + num2)
const addTwo = (num1 , num2) => ({username : "xyz"})
console.log(addTwo(3,4));