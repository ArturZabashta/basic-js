const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let inputString = String(str);
    let inputOptins = Object.assign(options);
    //console.log('inputOptins', inputOptins);
   
    let {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = inputOptins;
    
    if (repeatTimes === undefined) repeatTimes=1;
    if (additionRepeatTimes === undefined) additionRepeatTimes=1;
    if (separator === undefined) separator = '+';
    if (additionSeparator === undefined) additionSeparator='|';
    if (addition === undefined) addition='';
    
    addition = String(addition);

    //console.log('checked inputOptins',repeatTimes, separator, addition, additionRepeatTimes, additionSeparator);

    let newAdditionArray = [];

    for (let i = 1; i <= additionRepeatTimes;  i++) {
      newAdditionArray.push(addition);
    }
    let newAdditionString = newAdditionArray.join(additionSeparator);
    let outputStringPart = inputString + newAdditionString;
    //console.log('outputStringPart=', outputStringPart);
    let newStringArray = [];
    for (let i = 1; i <= repeatTimes;  i++) {
      newStringArray.push(outputStringPart);
    }
    let outputString = newStringArray.join(separator);
    //console.log('outputString=', outputString);
      
    return outputString;
}

module.exports = {
  repeater
};
