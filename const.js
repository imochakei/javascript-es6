const PI = 3.141592653589793;
PI = 3.14; // ini akan error (Reassigned)
PI = PI + 10; // ini juga akan error

// Constant array:
const peserta = ["Mocha", "Moona", "Budi"];

peserta[0] = "Kei"; // mengganti isi dari array
peserta.push("Zeta"); // menambahkan isi array

// const object:
const peserta = {firstName:"Mocha", lastName:"Kei", job:"Programmer"};

peserta.color = "Dilan"; // Bisa mengganti property

car.partner = "Milea"; // Bisa menambahkan property
