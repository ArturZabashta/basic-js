const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (
    typeof date === 'string' ||
    typeof date === 'number' ||
    typeof date === Array ||
    typeof date === null ||
    typeof date === undefined
  ) {
    try {
      throw {
        name: 'Error',
        message: 'Invalid date!',
      };
    } catch (ex) {
      return ex.message;
    }
  } else {
    let monthnum = date.getMonth();
    if (monthnum === 2 || monthnum === 3 || monthnum === 4) return 'spring';
    if (monthnum === 5 || monthnum === 6 || monthnum === 7) return 'summer';
    if (monthnum === 8 || monthnum === 9 || monthnum === 10)
      return 'autumn (fall)';
    if (monthnum === 11 || monthnum === 0 || monthnum === 1) return 'winter';
  }

}

module.exports = {
  getSeason
};
