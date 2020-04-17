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
    let person = new Person("25", "79")
    calculator.person = person;
    expect(calculator.person.age).toEqual("25");
  })

  test('should multiply person.age by mercAgeMult', () => {
    let calculator = new Calculator;
    let person = new Person("25", "79");
    calculator.person = person;
    calculator.mercuryCalc();
    expect(calculator.person.mercuryAge).toEqual(6);
  })

  test('should multiply person.age by venusAgeMult', () => {
    let calculator = new Calculator;
    let person = new Person("25", "79");
    calculator.person = person;
    calculator.venusCalc();
    expect(calculator.person.venusAge).toEqual(16);
  })

  test('should multiply person.age by marsAgeMult', () => {
    let calculator = new Calculator;
    let person = new Person("25", "79");
    calculator.person = person;
    calculator.marsCalc();
    expect(calculator.person.marsAge).toEqual(47);
  })

  test('should multiply person.age by jupiterAgeMult', () => {
    let calculator = new Calculator;
    let person = new Person("25", "79");
    calculator.person = person;
    calculator.jupiterCalc();
    expect(calculator.person.jupiterAge).toEqual(297);
  })
})