let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString);

//let myCreatedDate = new Date(2023,0,23,5,3)
console.log(myCreatedDate.toLocaleString());

//let myCreatedDate = new Date("2023-01-14")

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now());
console.log(Math.floor(Date.now()/1000));