// let myName = "xyz   "
// let mychannel = "abc    "
//     //console.log(myName.trim().length);
// console.log(myName.trueLength);

let myHeros = ["thor" , "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman0}`);
    }
}

Array.prototype.heyxyz = function(){
    console.log(`xyz says hello`);
    
}

Object.prototype.xyz = function(){
    console.log(`xyz is present in all objects`);
}
//heroPower.xyz()
// myHeros.xyz()
// myHeros.heyxyz()
//heroPower.heyxyz()

//inheritance
const User = {
    name:"rst",
    email:"rst@google.com"
}

const Teacher ={
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__= User

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "chai"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
"xyz".trueLength()
"iceTea".trueLength()