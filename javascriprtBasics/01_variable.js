const accountId = 25467
let accountEmail = "raj@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" // accepted in javascript but not a best practice

let accountStatus;// treated as undefined

//accountId = 234 // const can not change, gives error

console.log(accountCity);
accountEmail = "raj56@yahoo.com"
accountPassword = "212132"
accountCity = "Kolkata"

console.table([accountId,accountEmail,accountPassword,accountCity,accountStatus])

/*
var is global variable. not idea of scopes so not prefer to use
*/

