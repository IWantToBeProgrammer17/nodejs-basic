const { Person, createPerson } = require("./personmodel");
const { people } = require("./people");

console.log(people[0].name);

for (let i = 0; i < people.length; i++) {
  const person = people[i];
  if(person.name === "Azky") {
    continue;// Skip Azky
  }
  if(person.name === "Agus") {
    break;// menghentikan loop jika nama Agus ditemukan
  }
  console.log(`Name: ${person.name} is present`);
}

people.push(createPerson({
    name: "Eka", 
    birthyear: 2005, 
    height: 160, 
    weight: 50
}));