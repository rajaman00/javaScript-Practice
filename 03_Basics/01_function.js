function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("J");
}

//sayMyName //this is function reference

//sayMyName() // fuction execution

// function addTwoNumbers(number1, number2) { //number1 and number2 known as function parameters 
//     console.log(number1+number2);
// }
function addTwoNumbers(number1, number2) { //number1 and number2 known as function parameters 
    // let result = number1+number2
    // return result
    return number1+number2
}
const result = addTwoNumbers(3, 4) // 3 and 4 is known as arguments
console.log(result);


function loginUserMessage(username= "sam") {  //ab agr koi value pass nhi krenge to by default sam hi rahegi
    if (!username) {  // undefined ko by default false mana jata h
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage()); // without argument it prints 'undefined just logged in'
console.log(loginUserMessage("Raj"));


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
