//Constructor Way

//const tinderUser = new Object()  //singleton object

const tinderUser = {}
 tinderUser.id ="123ab"
 tinderUser.name = "Sammy"
 tinderUser.isLoggedIn = false

//  console.log(tinderUser);

 const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname: {
            firstname:"Aman",
            lastname: "Raj"
        }
    }
 }

 //console.log(regularUser.fullname.userfullname)

 const obj1 = {1:'a', 2:"b"}
 const obj2 = {3:"a", 4:"b"}

 //const obj3 ={obj1 , obj2} //same as array problem nesting
// const obj3 = Object.assign(obj1, obj2)
//const obj3 = Object.assign({},obj1, obj2) //{} --optional same as above

const obj3 = {...obj1, ...obj2}

//console.log(obj3);

const users =[
    {
        id:1,
        email:"123@gmail.com",
    },
    {
        id:2,
        email:"123@gmail.com",
    },
    {
        id:3,
        email:"123@gmail.com",
    }
]

// console.log(users[1].email);

//console.log(tinderUser);

//console.log(Object.keys(tinderUser)); //return an array of keys

//console.log(Object.values(tinderUser));//get key values in array

//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLOggedIn'));

const course ={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

const {courseInstructor: instructor} = course
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "Js in hindi",
//     "price": "free"
// }-- json format