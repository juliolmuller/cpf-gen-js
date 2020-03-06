const numOnly = require('@lacussoft/num-only')

/**
 * Generate a valid CPF (Brazilian ID document) number sequence
 *
 * @param {object} [options]
 * @return {string}
 */
module.exports = function(options) {
  return numOnly(cpfString)
}
