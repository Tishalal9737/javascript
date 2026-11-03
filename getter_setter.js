class User{
    constructor(email,password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}xyz`
    }
    set password(value){
        this._password = value
    }
}

const xyz = new User("xyz@google.com" , "abc")
console.log(xyz.email);