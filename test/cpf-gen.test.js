const cpfGen = require('../src/core')
const { validate } = require('cpf-check')



/*
 * Assert generated string length (only numbers)
 */
test('String length equals to 11', () => {
  for (let i = 0; i < 25; i++) {
    const cpf = cpfGen()
    expect(cpf.length).toBe(11)
  }
})



/*
 * Assert generated string length (formatted)
 */
test('String length equals to 14', () => {
  for (let i = 0; i < 25; i++) {
    const cpf = cpfGen({ format: true })
    expect(cpf.length).toBe(14)
  }
})



/**
 * Assert generated CPFs are valid (only numbers)
 */
test('Generated CPF is valid', () => {
  for (let i = 0; i < 25; i++) {
    const cpf = cpfGen()
    expect(validate(cpf)).toBeTruthy()
  }
})



/*
 * Assert generated CPFs are valid (formatted)
 */
test('Generated formatted CPF is valid', () => {
  for (let i = 0; i < 25; i++) {
    const cpf = cpfGen({ format: true })
    expect(validate(cpf)).toBeTruthy()
  }
})



/**
 * Assert CPF is formatted properly
 */

test('Formatted CPF matches "###.###.###-##"', () => {
  for (let i = 0; i < 25; i++) {
    const cpf = cpfGen({ format: true })
    expect(cpf).toMatch(/(\d{3}).(\d{3}).(\d{3})-(\d{2})/)
  }
})
