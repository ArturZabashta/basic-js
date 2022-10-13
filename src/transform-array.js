const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let newarr = [];
  if (!Array.isArray(arr))
    return 'arr parameter must be an instance of the Array!';
  else {
    for (let i = 0; i < arr.length; i++) {
      let s = arr[i];
      switch (s) {
        case '--discard-next':
          i++;
          break;
        case '--discard-prev':
          if (newarr.length >= 1) {
            newarr.pop();
            break;
          } else break;
        case '--double-next':
          if (i <= arr.length - 2) {
            newarr.push(arr[i + 1], arr[i + 1]);
            i++;
            break;
          } else break;
        case '--double-prev':
          if (i >= 1) {
            newarr.push(arr[i - 1], arr[i - 1]);
            break;
          } else break;
        default:
          newarr.push(arr[i]);
      }
    }
  }

  return newarr;

}

module.exports = {
  transform
};
