const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits( n ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let sum = 0;
  let strN = String(n);
  
  for(let i = 0; i < strN.length; i++) {
      sum += Number(strN[i]);
  }

  if ((String(sum)).length > 1) return sum = getSumOfDigits(sum);
  else return sum; 
  
}

module.exports = {
  getSumOfDigits
};
