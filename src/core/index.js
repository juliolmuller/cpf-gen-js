const numOnly = require('@lacussoft/num-only')

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
