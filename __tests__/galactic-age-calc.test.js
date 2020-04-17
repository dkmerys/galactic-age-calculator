import { Calculator } from './../src/galactic-age-calc.js'
import { Person } from './../src/galactic-age-calc.js'

describe ('Calculator', () => {

  test('should create new Calculator object', () => {
    let calculator = new Calculator;
    expect(calculator.person).toEqual({});
  })

  test('should create new Person object', () => {
    let person = new Person;
    expect(person).toEqual({});
  })

  test('should add Person object to Calculator as nested object', () => {
    let calculator = new Calculator;
    let person = new Person("25")
    calculator.person = person;
    expect(calculator.person.age).toEqual("25");
  })

  test('should multiply person.age by mercuryAgeMult', () => {
    let calculator = new Calculator;
    let person = new Person("25");
    calculator.person = person;
    calculator.mercuryCalc();
    expect(calculator.person.mercuryAge).toEqual(104);
  })

  test('should multiply person.age by venusAgeMult', () => {
    let calculator = new Calculator;
    let person = new Person("25");
    calculator.person = person;
    calculator.venusCalc();
    expect(calculator.person.venusAge).toEqual(40);
  })

  test('should multiply person.age by marsAgeMult', () => {
    let calculator = new Calculator;
    let person = new Person("25");
    calculator.person = person;
    calculator.marsCalc();
    expect(calculator.person.marsAge).toEqual(13);
  })

  test('should multiply person.age by jupiterAgeMult', () => {
    let calculator = new Calculator;
    let person = new Person("25");
    calculator.person = person;
    calculator.jupiterCalc();
    expect(calculator.person.jupiterAge).toEqual(2);
  })

  test('should give Person object lifespan based on continent and gender', () => {
    let calculator = new Calculator;
    let person = new Person ("25");
    calculator.person = person;
    calculator.person.gender = ("Female");
    calculator.person.continent = ("Europe")
    calculator.createPerson();
    expect(calculator.person.lifespan).toEqual(82)
  })

  test('should give Person object different lifespan based on different continent and gender selections', () => {
    let calculator = new Calculator;
    let person = new Person ("25");
    calculator.person = person;
    calculator.person.gender = ("Male");
    calculator.person.continent = ("Africa")
    calculator.createPerson();
    expect(calculator.person.lifespan).toEqual(61);
  })

  test('should give Person object different lifespan based on different continent and gender selections', () => {
    let calculator = new Calculator;
    let person = new Person ("25");
    calculator.person = person;
    calculator.person.gender = ("Female");
    calculator.person.continent = ("Oceania")
    calculator.createPerson();
    expect(calculator.person.lifespan).toEqual(80);
  })

  test('should give Person object average lifespan remaining', () => {
    let calculator = new Calculator;
    let person = new Person ("25");
    calculator.person = person;
    calculator.person.gender = ("Female");
    calculator.person.continent = ("Asia");
    calculator.createPerson();
    calculator.yearsLeft();
    expect(calculator.person.timeleft).toEqual(50)
  })

  test('should give Person object average lifespan remaining on Mercury', () => {
    let calculator = new Calculator;
    let person = new Person ("25");
    calculator.person = person;
    calculator.person.gender = ("Female");
    calculator.person.continent = ("Asia");
    calculator.createPerson();
    calculator.yearsLeft();
    expect(calculator.person.yearsLeftMercury).toEqual(208)
  })
})