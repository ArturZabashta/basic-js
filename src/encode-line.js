const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let acc = [''];
    let outputStr = '';
    for(let i = 0; i < str.length; i++) {
        console.log('str[i] = ', str[i], ':    acc = ', acc);
        
        if (acc.indexOf(str[i]) !== -1) acc.push(str[i]);
        if (acc.indexOf(str[i]) === -1) {
            outputStr += `${acc.length>1?acc.length:''}${acc[0]}`;
            acc.splice(0, acc.length, str[i]) 
        }
        if (i === str.length-1) outputStr += `${acc.length>1?acc.length:''}${acc[0]}`;
    }    

return outputStr;

}

module.exports = {
  encodeLine
};
