function sayMyname(){
    console.log("A");
    console.log("B");
    console.log("C");
    console.log("D");
    console.log("E");
}

//sayMyname()

//function addTwoNumbers(number1 , number2){
//    console.log(number1 + number2);
//}

function addTwoNumbers(number1 , number2){
    //let result = number1 + number2
    //return result

    return number1 + number2
}

const result = addTwoNumbers(3,4)
//console.log("Result:",result);

function loginUserMessage(username = "abc"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("xyz"));
//console.log(loginUserMessage());

function calculatecartprice(val1 , val2 , ...num1){
    return num1
}
//console.log(calculatecartprice(200 , 400 , 500 , 2000));

const user = {
    username:"xyz",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    username:"abc",
    price:399
})
const myNewArray = [200 , 400 , 600]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));