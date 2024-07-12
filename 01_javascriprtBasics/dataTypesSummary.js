// #Primitive ---- 7 category

// String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;   // or let userEmail= undefined

const id = Symbol('123');
const anotherId = Symbol('123')
// console.log(id===anotherId);
// console.table([id,anotherId]);

//const bigNumber = 333768378384738748n
//console.log(typeof bigNumber);

// # Reference (Non Primitive)

// Array, Object, Function

const heroes = ["shaktiman","naagraj","doga"];
let myObj= {
    name:"Raj",
    age:22,
}

const myFunction = function (){
    console.log("Hello World");
}

//console.log(typeof myFunction);
//console.log(myFunction);
// null ka typeof object ata h

//*************************

// Stack (primitive) , Heap(Non-primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename //pass copy of it's value
anothername = "chaiaurcode"

// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne;

userTwo.email = "raj@google.com"

console.log(userOne.email);
console.log(userTwo.email);