const marvel_heroes = ["thor", "ironman","hulk"]
const dc_heroes = ["superman","flash", "batman"]

//marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const all_heroes = marvel_heroes.concat(dc_heroes) //concat return a new array without modifying existing array

// console.log(all_heroes);

// *****spread operator --- kanch ka glass lijiye 

const all_new_heroes = [...marvel_heroes, ...dc_heroes]

// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "hitesh"}));  // interesting--- can't make a array, we have to specify key or vlue to use to make array

let score1 =100
let score2= 200
let score3 = 300
console.log(Array.of(score1,score2,score3));



