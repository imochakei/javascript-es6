// array spread
const numbers = [23,55,21,87,56];
let minValue = Math.min(...numbers); //21
let maxValue = Math.max(...numbers); //87

// object spread
const user = { firstName: "Mocha", lastName: "Kei" };
const profile = { age: 17, city: "Isekai" };
const identity = { ...user, ...profile };   // menggabungkan properti
const withFlag = { ...user, active: true }; // menambah properti
const override = { ...user, lastName: "Chiato" }; // menimpa properti