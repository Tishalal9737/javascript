class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`);
    }

    static createID(){
        return `123`
    }

}
const xyz = new User("xyz")
//console.log(xyz.createID())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email 
    }
}
const iphone = new Teacher("iphone","iphone.com")
console.log(Teacher.createID());

