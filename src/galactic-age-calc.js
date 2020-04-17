const mercuryAgeMult = 0.24;
const venusAgeMult = 0.62;
const marsAgeMult = 1.88;
const jupiterAgeMult = 11.86;

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
    return this.person.timeLeft = Math.round(this.person.lifespan - this.person.age);
  }

  yearsLeftMercury() {
    this.person.timeLeft = Math.round(this.person.lifespan - this.person.age);
    return this.person.timeLeftMercury = Math.round(this.person.timeLeft / mercuryAgeMult);
  }

  yearsLeftVenus() {
    this.person.timeLeft = Math.round(this.person.lifespan - this.person.age);
    return this.person.timeLeftVenus = Math.round(this.person.timeLeft / venusAgeMult);
  }

  yearsLeftMars() {
    this.person.timeLeft = Math.round(this.person.lifespan - this.person.age);
    return this.person.timeLeftMars = Math.round(this.person.timeLeft / marsAgeMult);
  }

  yearsLeftJupiter() {
    this.person.timeLeft = Math.round(this.person.lifespan - this.person.age);
    return this.person.timeLeftJupiter = Math.round(this.person.timeLeft / jupiterAgeMult);
  }
  
  mercuryCalc() {
    return this.person.mercuryAge = Math.round(this.person.age / mercuryAgeMult);
  }

  venusCalc() {
    return this.person.venusAge = Math.round(this.person.age / venusAgeMult);
  }

  marsCalc() {
    return this.person.marsAge = Math.round(this.person.age / marsAgeMult);
  }

  jupiterCalc() {
    return this.person.jupiterAge = Math.round(this.person.age / jupiterAgeMult);
  }
}

export class Person {
  constructor(age, lifespan, mercuryAge, venusAge, marsAge, jupiterAge, gender, continent, timeLeft, timeLeftMercury, timeLeftVenus, timeLeftMars, timeLeftJupiter) {
    this.age = age;
    this.lifespan = lifespan;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
    this.gender = gender;
    this.continent = continent;
    this.timeLeft = timeLeft;
    this.timeLeftMercury = timeLeftMercury;
    this.timeLeftVenus = timeLeftVenus;
    this.timeLeftMars = timeLeftMars;
    this.timeLeftJupiter = timeLeftJupiter;
  }
}