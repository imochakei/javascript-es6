// Map
const users = new Map([
  [101, { firstName: "Mocha", lastName: "Kei" }],
  [102, { firstName: "Moona", lastName: "Hoshinova" }],
]);

console.log(userById.get(101)); // { firstName: "Mocha", lastName: "Kei" }
console.log(userById.has(999)); // false
console.log(userById.size);     // 2

// Set
const tags = new Set();
tags.add("javascript");
tags.add("es6");
tags.add("javascript"); // diabaikan karena sudah ada (harus unik)
console.log(tags.has("es6")); // true
console.log(tags.size);       // 2

const names = ["Moona", "Mocha", "Moona", "Zeta"];
const uniqueNames = [...new Set(names)]; // ["Moona", "Mocha", "Zeta"]
