const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (members === null && members === '') return false;
  else if (!Array.isArray(members)) return false;
  else {
    let newarr = [];
    for (let i = 0; i < members.length; i++) {
      let str = members[i];
      let x = typeof str;
      if (x === 'string' && str !== '') {
        let newstr = str.trimStart().toUpperCase();
        newarr.push(newstr[0]);
        console.log('при ' + str + ' newarr = ' + newarr);
      }
    }
    newarr.sort();
    console.log(' после сорт newarr = ' + newarr);
    let name = newarr.join('');
    if (name === '') return false;
    else return name;
  }
}

module.exports = {
  createDreamTeam
};
