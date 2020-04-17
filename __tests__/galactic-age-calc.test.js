import { Calculator } from './../src/galactic-age-calc.js'
describe ('Calculator', () => {

  test('should create new Calculator object', () => {
    let calculator = new Calculator;
    expect(calculator).toEqual({});
  })

  test('should create new Person object', () => {
    let person = new Person;
    expect(person).toEqual({});
  })
})