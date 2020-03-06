const numOnly = require('@lacussoft/num-only')

/**
 * Generate a string of integer numbers
 *
 * @param {number} length Number of digits to be generated
 * @return {string}
 */
const numGen = function(length) {
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
module.exports = function(options) {
  return numOnly(cpfString)
}
