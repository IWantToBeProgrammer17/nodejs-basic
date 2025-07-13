const { Person } = require("./personmodel");

const person1 = new Person("Azky", 2011, 165, 42);
console.log(person1);
person1.getage();
console.log(person1.energy);
person1.walk(10);
person1.eat(10);