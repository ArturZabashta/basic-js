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
  let newstr = str + '';
  let additionstring = '';
  let realstring = '';
  let newstring = '';
  let newadditionstring = '';

  if (!('separator' in options)) {
    options['separator'] = '+';
  }

  if ('addition' in options && !('additionSeparator' in options))
    options['additionSeparator'] = '|';
  else {
    if (!('addition' in options)) {
      options['additionRepeatTimes'] = 0;
    }
  }

  if (options['additionRepeatTimes'] > 1) {
    for (let i = 0; i < options['additionRepeatTimes']; i++) {
      newadditionstring += options['addition'] + options['additionSeparator'];
    }
    let o = options['additionSeparator'].length;
    let p = newadditionstring.length;
    let r = p - o;
    additionstring = newadditionstring.substr(0, r);
  } else additionstring = options['addition'];

  if (additionstring.length > 0 && 'repeatTimes' in options) {
    for (let n = 0; n < options['repeatTimes']; n++) {
      realstring += newstr + additionstring + options['separator'];
    }
  } else {
    if ('repeatTimes' in options) {
      for (let n = 0; n < options['repeatTimes']; n++)
        realstring += newstr + options['separator'];
    } else realstring += newstr;
  }
  let x = options['separator'].length;
  let y = realstring.length;
  let z = y - x;

  newstring = realstring.substr(0, z);

  return newstring;
}

module.exports = {
  repeater
};
