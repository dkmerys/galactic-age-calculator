import { Calculator } from './../src/galactic-age-calc.js'
describe ('Calculator', () => {

  test('should create new Calculator object', () => {
    let calculator = new Calculator;
    expect(calculator).toEqual({})
  })
})