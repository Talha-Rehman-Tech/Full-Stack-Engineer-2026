class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

const person1 = new Person("Rana", 21);

console.log(person1.name); // Rana
person1.greet();           // Hello, I'm Rana

//A class in JavaScript is a blueprint for creating objects. It was introduced in ES6 (ECMAScript 2015) to make object-oriented
//programming easier to read and write. Under the hood, JavaScript classes still use prototypes.