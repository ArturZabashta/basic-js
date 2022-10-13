const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr_1 = s1.split('');
  let arr_2 = s2.split('');
  var bible_1 = {};
  var bible_2 = {};
  for (let i = 0; i < arr_1.length; i++) {
    let m = arr_1[i];
    if (!(m in bible_1)) bible_1[m] = 0;
    bible_1[m]++;
  }
  for (let i = 0; i < arr_2.length; i++) {
    let m = arr_2[i];
    if (!(m in bible_2)) bible_2[m] = 0;
    bible_2[m]++;
  }
  let keys1 = Object.keys(bible_1).sort();
  let keys2 = Object.keys(bible_2).sort();
  let count = 0;
  for (let k = 0; k < keys1.length; k++) {
    if (keys1[k] in bible_2)
      count += Math.min(bible_1[keys1[k]], bible_2[keys1[k]]);
    else continue;
  }
  return count;

}

module.exports = {
  getCommonCharacterCount
};
