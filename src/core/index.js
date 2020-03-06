const cpfFmt = require('@lacussoft/cpf-fmt')

/**
 * Default options when runiing 'cpfGen' function
 *
 * @constant {object}
 */
const DEFAULT_OPTIONS = {
  format: false,
}

const mergeOptions = (options) => {
  return Object.assign({}, DEFAULT_OPTIONS, options)
}

/**
 * Generate a string of integer numbers
 *
 * @param {number} length Number of digits to be generated
 * @return {string}
 */
const numGen = (length) => {
  let string = ''
  while (string.length < length) {
    string += String(parseInt(Math.random() * 10))
  }
  return string
}

/**
 * Generate a valid CPF (Brazilian ID document) number sequence
 *
 * @param {object} [options]
 * @return {string}
 */
const cpfGen = function(options) {

  options = mergeOptions(options)
  let cpf = arguments[1] || numGen(9)

  for (const nextNumIndex of [9, 10]) {
    let sum = 0
    let factor = nextNumIndex + 1
    for (let n = 0; n < nextNumIndex; n++, factor--) {
      sum += cpf[n] * factor
    }
    const rem = 11 - (sum % 11)
    cpf += rem > 9 ? 0 : rem
  }

  if (options.format) {
    return cpfFmt(cpf)
  }

  return cpf
}

module.exports = cpfGen
