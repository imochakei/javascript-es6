let firstName   = "Mocha";
let lastName    = "Kei";

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
let fullName  = getFullName(firstName, lastName);

let comparison  = firstName != lastName;

console.log({
    firstName, lastName, fullName, comparison
});

