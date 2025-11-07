// Fungsi Javascript Tradisional (function expression)
const greet = function(name) {
    return "Halo, " + name + "!";
};
console.log(greet('Traditional'));

// Modern es6+ (arrow function)
const greetArrowFunctions = name => `Halo, ${name}!`;

console.log(greetArrowFunctions('Arrow Functions'));
