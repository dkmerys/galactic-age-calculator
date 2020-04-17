

export class Calculator {
  
  constructor() {
    this.person = {};
  }
  
  createPerson() {
    if ((this.person.gender === "Female") && (this.person.continent === "Africa")) {
      this.person.lifespan = 65;
    } else if ((this.person.gender === "Male") && (this.person.continent === "Africa")) {
      this.person.lifespan = 61;
    };
    if ((this.person.gender === "Female") && (this.person.continent === "Asia")) {
      this.person.lifespan = 75;
    } else if ((this.person.gender === "Male") && (this.person.continent === "Asia")) {
      this.person.lifespan = 71;
    };if ((this.person.gender === "Female") && (this.person.continent === "Europe")) {
      this.person.lifespan = 82;
    } else if ((this.person.gender === "Male") && (this.person.continent === "Europe")) {
      this.person.lifespan = 75;
    };if ((this.person.gender === "Female") && (this.person.continent === "Latin-South-America")) {
      this.person.lifespan = 78;
    } else if ((this.person.gender === "Male") && (this.person.continent === "Latin-South-America")) {
      this.person.lifespan = 72;
    };if ((this.person.gender === "Female") && (this.person.continent === "North-America")) {
      this.person.lifespan = 81;
    } else if ((this.person.gender === "Male") && (this.person.continent === "North-America")) {
      this.person.lifespan = 76;
    };if ((this.person.gender === "Female") && (this.person.continent === "Oceania")) {
      this.person.lifespan = 80;
    } else if ((this.person.gender === "Male") && (this.person.continent === "Oceania")) {
      this.person.lifespan = 76;
    };
  };

  yearsLeft() {
    return this.person.timeleft = Math.round(this.person.lifespan - this.person.age);
  }
  
  mercuryCalc() {
    const mercuryAgeMult = 0.24;
    return this.person.mercuryAge = Math.round(this.person.age / mercuryAgeMult);
  }

  venusCalc() {
    const venusAgeMult = 0.62;
    return this.person.venusAge = Math.round(this.person.age / venusAgeMult);
  }

  marsCalc() {
    const marsAgeMult = 1.88;
    return this.person.marsAge = Math.round(this.person.age / marsAgeMult);
  }

  jupiterCalc() {
    const jupiterAgeMult = 11.86;
    return this.person.jupiterAge = Math.round(this.person.age / jupiterAgeMult);
  }
}

export class Person {
  constructor(age, lifespan, mercuryAge, venusAge, marsAge, jupiterAge, gender, continent, timeLeft) {
    this.age = age;
    this.lifespan = lifespan;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
    this.gender = gender;
    this.continent = continent;
    this.timeLeft = timeLeft
  }
}