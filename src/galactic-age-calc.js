

export class Calculator {

  constructor() {
    this.person = {};
  }

  mercuryCalc () {
    const mercAgeMult = 0.24;
    return this.person.mercuryAge = (this.person.age * mercAgeMult);
  }
}

export class Person {
  constructor(age, lifespan, mercuryAge) {
    this.age = age;
    this.lifespan = lifespan;
    this.mercuryAge = mercuryAge;
  }
}