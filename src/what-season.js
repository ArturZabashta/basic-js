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
 function getClass(obj) {
  return {}.toString.call(obj).slice(8, -1);
}
function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  
  if (getClass(date) !== 'Date') {
      throw new Error('Invalid date!');
      return;
  } else {

    let monthNum = date.getMonth();    
    let dateNum = date.getDate();


    console.log('monthNum = ', monthNum, '  dateNum=', dateNum);

    if (monthNum === 2 && dateNum <= 31 || monthNum === 3 && dateNum <= 30 || monthNum === 4 && dateNum<=31) {return 'spring';
    }else if (monthNum === 5 && dateNum <= 30 || monthNum === 6 && dateNum <= 31 || monthNum === 7 && dateNum <= 31) {return 'summer';
      }else if (monthNum === 8 && dateNum <= 30 || monthNum === 9 && dateNum <= 31 || monthNum === 10 && dateNum <= 30) {
      return 'autumn';
        }else if (monthNum === 11 && dateNum <= 31 || monthNum === 0 && dateNum <= 31 || monthNum === 1 && dateNum <= 28) {return 'winter';
          } else throw new Error("Invalid date!");



}}

module.exports = {
  getSeason
};
