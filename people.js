const {Person} = require("./personmodel");

const people = [];

people.push(new Person("Azky", 2011, 165, 42));
people.push(new Person("Budi", 2000, 170, 70));
people.push(new Person("Cici", 1995, 160, 50)); 
people.push(new Person("Doni", 1985, 180, 80));
people.push(new Person("Agus", 1990, 175, 65));

module.exports = { people };