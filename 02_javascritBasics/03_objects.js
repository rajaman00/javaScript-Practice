//There is two ways to declare an object
// literal way and constructor way
// if we make object from constructor then singleton object created
//if we create object through literal way then multiple instances of an object created
   

//  ********object literals
const mySym = Symbol("Key1")


const JsUser = {
    name: "Raj",
    "full name": "Aman Raj", //can't be accessed through dot operator
    age: 22,
    //mySym:"myKey1", //not used as symbol
    [mySym]:"myKey1",
    location: "Patna",
    email: "raj@google.com",
    isLoggedIn: false,
    lastLogingDays :["Mondays","Saturdays"]
}

// console.log(JsUser.email);
// console.log(JsUser['email']);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);//symbol ko [] isi tarh use krte h
JsUser.email = "raj45@google.com" //overiding the value
// but i want, value don't change
//Object.freeze(JsUser)
JsUser.email = "raj546@google.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

