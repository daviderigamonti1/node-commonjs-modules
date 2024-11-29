const userInfo = require("./modules/people");
let firstName = process.argv[2] ?? "Mario";
let lastName = process.argv[3] ?? "Rossi";
let hobbyOne = process.argv[4] ?? "Reading";
let hobbyTwo = process.argv[5] ?? "Swimming";
let hobbyThree = process.argv[6] ?? "Cycling";
const person = userInfo(firstName, lastName, hobbyOne, hobbyTwo, hobbyThree);
console.log(person);