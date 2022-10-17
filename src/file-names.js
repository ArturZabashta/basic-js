const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  const memory = {};
    const outputNames = [];
    //let  count = 1;
    names.forEach((name) => {
        if (!(name in memory)) {
            memory[name] = 1;
            outputNames.push(name);
            //count += 1;
        } else {
            memory[`${name}(${memory[name]})`] = 1
            outputNames.push(`${name}(${memory[name]})`);
            memory[name] += 1;
            //count += 1;
        }
        
    })
return outputNames;
}

module.exports = {
  renameFiles
};
