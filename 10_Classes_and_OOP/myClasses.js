// ES6(ECMAScript 2015) - It is the sixth major update to the ECMAScript language specification, hwich is the standardized foundation for JavaScript

// 'Class' is keyword

// contructor is automatically got called when we intialise an object inside a class using 'new'
// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}124`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("sachin23", "example@gmail.com", "abc")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());


// Behind the scene

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password

}

User.prototype.encryptPassword = function(){
    return `${this.password}2333`
}

User.prototype.changeUsername = function(){
    return`${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "abc")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

// console.log(User())