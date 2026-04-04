function setUsername(username){
    // Complex DB Calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    
    // Here actually we are giving refernce only, we are not calling (setUsername) function inside this function
    // setUsername(username)

    // So that why we are explicit methods to call this function using call and this
    // .call is used tpo hold the refernce of that fucntion
    // 'this' is used to give execution(current) context that we are call that function inside this function
    // we are using 'this' as a refernce also
    setUsername.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser("chaai", "example@email.com", "abcd124")
console.log(chai);
