const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

 function calculateDepthOutlet(arr) {
  console.log(arr);
  let count = 1;

  for (let i = 0; i < arr.length; i++) {
    let b = arr[i];

    if (Array.isArray(b)) {
      count +=1;
      calculateDepthOutlet(b)
    } else continue;
  }

  return console.log(count);
}class DepthCalculator {
  calculateDepth(arr) {

    let arrayDepth = 1;

    arr.map(elem => {

      if (Array.isArray(elem)) {
        const currentDepth = this.calculateDepth(elem);

        if (arrayDepth < 1 + currentDepth) {
          arrayDepth = 1 + currentDepth;
        }
      }
      
    });

    return arrayDepth;
  }
  
}

module.exports = {
  DepthCalculator
};
