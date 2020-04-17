

export class Calculator {

  constructor() {
    this.person = {};
  }

  mercuryCalc () {
    const mercAgeMult = 0.24;
    return this.person.mercuryAge = Math.round(this.person.age * mercAgeMult);
  }

  venusCalc () {
    const venusAgeMult = 0.62;
    return this.person.venusAge = Math.round(this.person.age * venusAgeMult);
  }

  marsCalc () {
    // const marsAgeMult = 1.88;
    // return this.person.marsAge = Math.round(this.person.age * marsAgeMult);
  }
}

export class Person {
  constructor(age, lifespan, mercuryAge, venusAge, marsAge, jupiterAge) {
    this.age = age;
    this.lifespan = lifespan;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
  }
}