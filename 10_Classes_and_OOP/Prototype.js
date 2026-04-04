// let myName = "hitesh     "
// let myChannel = "chai     "

// console.log(myName.trueLength());


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.sachin = function(){
    console.log(`Sachin is present in all objects`);
    
}

Array.prototype.heySachin = function(){
    console.log(`Sachin says hello!`);
    
}

// heroPower.sachin()

// myHeros.sachin()
// myHeros.heySachin()
// heroPower.heySachin()


// Inheritance

const User = {
    name : "chai",
    email : "chai@example.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false 
}

const TASupport = {
    makeAssignmrnt : 'JS Assignment',
    fullTime : true,

    __proto__ : TeachingSupport
}

Teacher.__proto__= User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    // console.log((`True Lengtm is`));
    console.log(`True length is: ${this.trim().length}`);
    
    
}

anotherUsername.trueLength()
"hitesh".trueLength()
"sachin   ".trueLength()
