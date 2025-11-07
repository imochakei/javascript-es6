const users = [
  { firstName: "Mocha", lastName: "Kei" },
  { firstName: "Moona", lastName: "Hoshinova" }
];

const fullNames = [];
for (let u of users) {
  fullNames.push(`${u.firstName} ${u.lastName}`);
}
console.log({ fullNames })