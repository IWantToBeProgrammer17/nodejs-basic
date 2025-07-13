console.log("Hello, World!");

function ubahUangJajan(sekolah) {
  let uangjajan;

  if (sekolah === "SD") {
    uangjajan = 1000;
  } else if (sekolah === "SMP") {
    uangjajan = 3000;
  } else if (sekolah === "SMA") {
    uangjajan = 5000;
  } else if (sekolah === "UNIV") {
    uangjajan = 10000;
  }

  return uangjajan;
}

const nama = "Azky";
let sekolah = "SD";
uangjajan = ubahUangJajan(sekolah);

console.log("nama saya adalah " + nama);
console.log("saya bersekolah di " + sekolah);
console.log("uang jajan saya ada " + uangjajan);

sekolah = "SMP";
uangjajan = ubahUangJajan(sekolah);

console.log("uang jajan saya ada " + uangjajan);

sekolah = "SMA";
uangjajan = ubahUangJajan(sekolah);

console.log("uang jajan saya ada " + uangjajan);

console.log(" ");

const person = {
  nama: "Azky",
  level: "SMP",
  age: 14,
  pocketmoney: 0,
};

person.pocketmoney = ubahUangJajan(person.level);

console.log(person);

person.level = "SMA";

person.pocketmoney = ubahUangJajan(person.level);

console.log(person);
console.log(" ");

class Person {
  name;
  birthyear;
  height;
  weight;
  energy = 100;

  constructor(name, birthyear, height, weight) {
    this.name = name;
    this.birthyear = birthyear;
    this.height = height;
    this.weight = weight;
  }

  getage() {
    const currentyear = new Date().getFullYear();
    const age = currentyear - this.birthyear;
    console.log(`${this.name} is ${age} years old.`);
  }

  walk(length) {
    console.log(`${this.name} walks for ${length} kms.`);
    this.energy = this.energy - length * 0.2;
    console.log(`${this.name}'s energy is now ${this.energy}.`);
  }

  sleep() {
    this.energy = 100;
    console.log(`${this.name} tidur dan energinya kembali menjadi 100.`);
  }
  
  eat() {
    if (arguments.length === 0) {
      console.log(
        "Tolong masukkan jumlah makanan yang dimakan sebagai parameter."
      );
      return;
    }
    const jumlah = arguments[0];
    const tambahEnergi = jumlah * 0.1;
    this.energy += tambahEnergi;
    console.log(
      `${this.name} makan sebanyak ${jumlah}, energinya bertambah ${tambahEnergi} menjadi ${this.energy}.`
    );
  }
  run(length) {
    console.log(`${this.name} runs for ${length} kms.`);
    this.energy = this.energy - length * 0.5;
    console.log(`${this.name}'s energy is now ${this.energy}.`);
  }
  swim(length) {
    console.log(`${this.name} swims for ${length} kms.`);
    this.energy = this.energy - length * 0.8;
    console.log(`${this.name}'s energy is now ${this.energy}.`);
  }
  talk(minutes) {
    console.log(`${this.name} talks for ${minutes} minutes.`);
    this.energy = this.energy - minutes * 0.1;
    console.log(`${this.name}'s energy is now ${this.energy}.`);
  }
  play(minutes) {
    console.log(`${this.name} plays for ${minutes} minutes.`);
    this.energy = this.energy - minutes * 0.2;
    console.log(`${this.name}'s energy now ${this.energy}.`);
  }
}

const person1 = new Person("Azky", 2011, 165, 42);
console.log(person1);
person1.getage();
console.log(performance.energy);
person1.walk(10);
person1.eat(10);