const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const memory = {};
  domains.forEach((item)=> {
    let curItemArray = item.split('.').reverse();
    console.log(curItemArray);
    curItemArray.reduce((sumDomain, domain) => {
        sumDomain += `.${domain}`; 
        console.log('sumDomain=', sumDomain);
        if (!(sumDomain in memory)) {
            memory[sumDomain] = 1; 
        } else memory[sumDomain] +=1;
        return sumDomain;

    },'')
  })
return memory;
}

module.exports = {
  getDNSStats
};
