const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 function getClass(obj) {
  return {}.toString.call(obj).slice(8, -1);
}
const chainMaker = {
  chainArray: [],
  getLength() {
    return(this.chainArray.length);
  },
  addLink(value) {
    value = '( ' + value + ' )';
    this.chainArray.push(value)
    return this;
  },
  removeLink(position) {
    if (getClass(position) !== "Number" || position < 1 || position > this.chainArray.length - 1){
      this.chainArray = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.chainArray.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chainArray = this.chainArray.reverse();
    return this;
  },
  finishChain() {
    const showChains = [...this.chainArray];
    this.chainArray = [];
    return showChains.join("~~");
  }
};

module.exports = {
  chainMaker
};
