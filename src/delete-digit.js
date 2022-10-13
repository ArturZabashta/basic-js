const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n + '';
  let mass = [];
  for (let i = 0; i < str.length; i++) {
    mass.push(str[i]);
  }
  for (let i = 0; i < 10; i++) {
    let chek = i + '';

    if (mass.indexOf(chek) == -1) continue;
    else {
      let n = mass.indexOf(chek);

      mass.splice(n, 1);

      let newstr = mass.join('');
      let num = Number(newstr);
      return num;
    }
  }

}

module.exports = {
  deleteDigit
};
