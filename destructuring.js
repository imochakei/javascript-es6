// Object destructuring
const user = { firstName: "Mocha", lastName: "Kei", age: 17 };
const { firstName, lastName } = user; // "Mocha", "Kei"
let { age } = user;
console.log({firstName, lastName, age})


// Array destructuring
const fullstacks = ["Frontend", "Backend"];
const [f, b] = fullstacks; 
console.log({f, b})
