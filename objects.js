//singleton(constructer method)
    //Object.create

//objects literals(object declare)

const mySym = Symbol("key1")


const JsUser = {
    name : "xyz" , 
        //"full name" : "xyz abc" ,
    "full name" : "xyz abc" ,
    [mySym] : "myKey1" ,
    age: 18 ,
    location : "Rajkot" ,
    email : "xyz@gmail.com" ,
    isLoggedIn : false ,
    lastLoginDays: ["Monday" , "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
//     //console.log(JsUser.full name); //Error
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]) //declare type
// console.log(JsUser[mySym])

JsUser.email = "abc@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "rst@gmail.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user , ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());