class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}sachin`
    }

    set password(value){
        // this._password = value.toUpperCase()
        this._password = value
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
}

const sachin = new User("sachin@gmail.com", "abc123")
console.log(sachin.password);
console.log(sachin.email);

