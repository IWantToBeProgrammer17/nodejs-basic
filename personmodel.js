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

function createPerson({name, birthyear, height, weight}) {
    return new Person(name, birthyear, height, weight);
}


module.exports = {Person, createPerson};