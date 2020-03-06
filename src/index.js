"use strict";

var numOnly = require('@lacussoft/num-only');

var cpfFmt = require('@lacussoft/cpf-fmt');
/**
 * Default options when runiing 'cpfGen' function
 *
 * @constant {object}
 */


var DEFAULT_OPTIONS = {
  format: false
};

var mergeOptions = function mergeOptions(options) {
  return Object.assign({}, DEFAULT_OPTIONS, options);
};
/**
 * Generate a string of integer numbers
 *
 * @param {number} length Number of digits to be generated
 * @return {string}
 */


var numGen = function numGen(length) {
  var string = '';

  while (string.length < length) {
    string += String(parseInt(Math.random() * 10));
  }

  return string;
};
/**
 * Generate a valid CPF (Brazilian ID document) number sequence
 *
 * @param {object} [options]
 * @return {string}
 */


var cpfGen = function cpfGen(options) {
  if (arguments[1] !== undefined && typeof arguments[1] !== 'string' && numOnly(arguments[1]).length !== 9) {
    throw new Error("'".concat(arguments[1], "' should be a string of 9 numbers length"));
  }

  var cpf = arguments[1] || numGen(9);
  options = mergeOptions(options);

  for (var _i = 0, _arr = [9, 10]; _i < _arr.length; _i++) {
    var nextNumIndex = _arr[_i];
    var sum = 0;
    var factor = nextNumIndex + 1;

    for (var n = 0; n < nextNumIndex; n++, factor--) {
      sum += cpf[n] * factor;
    }

    var rem = 11 - sum % 11;
    cpf += rem > 9 ? 0 : rem;
  }

  if (options.format) {
    return cpfFmt(cpf);
  }

  return cpf;
};

module.exports = cpfGen;
