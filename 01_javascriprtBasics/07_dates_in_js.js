//Dates--- object data type

const myDate = new Date()
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

//let myCreatedDate = new Date(2023,1,27)  // 0 means january agr month days se jyada input diye to next month me shift ho jayega jitna jyada dega usko add krke next month ka date date dega
//let myCreatedDate = new Date(2023,1,27,6,8) // Time ke sath
let myCreatedDate = new Date("01-14-2024") // specifically formatted date

//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);// result in milli seconds
// console.log(myCreatedDate.getTime());
// console.log(Math.floor((Date.now())/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default',{
    weekday: "long",
    
})
