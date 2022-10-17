const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function compare(a, b) {
  return a-b;
}

function sortByHeight(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const memoryArr = arr.filter((num) => {
    return num !== -1;
})
memoryArr.sort(compare);
console.log('memoryArr = ', memoryArr);
const outputArr = arr.map((num) => {
if (num !== -1) return memoryArr.shift()
else return -1;
})
return outputArr;
}

module.exports = {
  sortByHeight
};
