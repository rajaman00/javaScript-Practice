let score = "33abc"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)

//console.log(typeof(valueInNumber));
//console.log(valueInNumber);  // gives Nan--not a number  for "33abc"


// "33"  => 33
// "33abc" => NaN
// true => 1
// false =>0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

//console.log(booleanIsLoggedIn);

// 1 => true; 0=> false
//""=> false; "Raj"=>true

let someNumber = 33
let stringNumber = String(someNumber)

//console.log(stringNumber);
//console.log(typeof stringNumber);


//****************Operations*********************

let value =3 ;
let negValue = -value;
//console.log(negValue);


let str1= "Hello"
let str2 = " Raj"

let str3 = str1 + str2;
//console.log(str3);

//console.log("1" + 2);
//console.log(1 + "2");
//console.log("1" +2 +2);
//console.log(1 + 2 + "2");

let gameCounter = 100;

//console.log(++gameCounter)
console.log(gameCounter++);