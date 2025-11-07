//inisiasi class
class Person {
    //constructor
    constructor(name, age) {
        this.name = name; //attribut nama
        this.age = age; //attribut umur
    }
    // perilaku/behavior dituangkan dalam bentuk fungsi
    speak() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let mocha = new Person("Mocha Kei", 17); //object

mocha.speak(); //Hello, my name is Mocha Kei and I am 25 years old.