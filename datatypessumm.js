//primitive ( call by value)
//string , number , boolean , null , undefined(variable-decided,value-no decided), symbol(unique value), BigInt(significate,big value)

const score=100
const scorevalue=100.3
const isLoggesIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

//reference(non primitive)
//array , objects , functions

const fruits=["apple","banana","mango"];
let myobj = {
    name:"xyz",
    age:22
}

//const myfunction=function(){
    //console.log("Hello");
//}
//console.log(typeof outsideTemp);


/*stack(primitive) and heap(Non-primitive) memory*/
let myyoutubename = "xyzcom"
let anothername = myyoutubename

anothername = "abc"
console.log(anothername);

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo= userOne
userTwo.email="abc@google.com"
console.log(userOne.email);
console.log(userTwo.email);