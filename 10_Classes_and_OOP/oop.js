// const { user } = require("react");

const user = {
    username : "Sachin",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log("Got user details from database");
        // console.log(`Username : ${this.username}`);
        
        console.log(this);
        
    }
}

console.log(user.username);
// console.log(user.getUserDetails());
console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = new User("Sachin", 22, true)
const userTwo = new User("Biplob", 21, false)

console.log(userOne);
console.log(userTwo);

//Note :- first of all when we use " this " then an empty object is got created which we called as an instance
// Everytime we use this an empty object/parentheses is cretated
//Constructor function is called beacuse of " new " keyword
