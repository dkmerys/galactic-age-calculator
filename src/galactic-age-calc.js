

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