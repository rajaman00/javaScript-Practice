const score = 400
// console.log(score);
// console.log(score.toFixed(1));

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length)
// console.log(balance.toFixed(2));

const otherNumber  = 123.8966
//console.log(otherNumber.toPrecision(3));

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN'));//without en-IN arguments it return us standards value

// *************************Maths****************

// console.log(Math);  //A object ur iske sath bahut sari property but problem ye h ki yha pe print krte h to properties show nhi hoti iske liye hme browser me console.log krna padega
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,7,9,1,5));
// console.log(Math.max(4,8,6,0,3));

console.log(Math.random()); //value lies between 0 to 1 always

console.log(Math.floor(Math.random()*10)+1);//value comes between 1 to 10 to avoid 0 we added 1.

const min  = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min +1)) + min);
