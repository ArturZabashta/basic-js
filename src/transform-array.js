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

 function getClass(obj) {
  return {}.toString.call(obj).slice(8, -1);
}
function transform(arr) {
 
let startArr = [];
if (getClass(arr)!=='Array') {
throw new Error("'arr' parameter must be an instance of the Array!");
 return ;
} else {
  let checkArr = Array.from(arr)
  startArr = arr.reduce((accArr, elem, i, arr) => {
      switch (elem) {
        case '--discard-next':
            if (checkArr[i+1] && checkArr[i+1] !== null) checkArr[i+1] = null;
          break;
        case '--discard-prev':
            if (checkArr[i-1] && checkArr[i-1] !== null) {checkArr[i-1] = null;
            accArr.pop();
            break;
          } else break;
        case '--double-next':
            if (checkArr[i+1] && checkArr[i+1] !== null) {
            accArr.push(checkArr[i + 1]);                
            break;
          } else break;
        case '--double-prev':
            if (checkArr[i-1]  && checkArr[i-1] !== null) {
                accArr.push(accArr[accArr.length - 1]);
            break;
          } else break;
        default:{
            if (checkArr[i] !== null) accArr.push(arr[i]);
        }
      }
      
      return accArr
  }, []);

  return startArr;

  }
}

module.exports = {
  transform
};
