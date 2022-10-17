const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let sum = 0;
    console.log('matrix', matrix);
    console.log('matrix.length', matrix.length);
    console.log('matrix[0].length', matrix[0].length);
  for(let mRow = 0; mRow < matrix.length; mRow++){
    let innerMatrixLength = matrix[mRow].length;
    for(let mCol = 0; mCol < innerMatrixLength; mCol++){
      if (mRow ===0) {        
        sum += matrix[mRow][mCol];
      }
      if (mRow > 0 && matrix[mRow-1][mCol] !==0) {        
        sum += matrix[mRow][mCol];
      }      
    }
  }
  return  sum;
}

module.exports = {
  getMatrixElementsSum
};
