const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

 function getClass(obj) {
  return {}.toString.call(obj).slice(8, -1);
}

function dateSample(sampleActivity) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (getClass(sampleActivity) !== "String")
  return false;
  else if (Number(sampleActivity) > 0 && Number(sampleActivity) <= MODERN_ACTIVITY) 
    return Math.ceil((Math.log(MODERN_ACTIVITY / Number(sampleActivity)) * HALF_LIFE_PERIOD) / 0.693);
  return false;
    }


module.exports = {
  dateSample
};
