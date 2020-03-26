const {lowerCaseRange, upperCaseRange} = require('./constants');
const {isInRange} = require('./utils');

const encode = (str, shift) => {
  let encodeResult = '';
  
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    
    if (isInRange(charCode, lowerCaseRange)) {
      let code = charCode + shift;
      code = code > lowerCaseRange[1] ? (code - lowerCaseRange[1] + lowerCaseRange[0] - 1) : code;
      encodeResult += String.fromCharCode(code);
    } else if (isInRange(charCode, upperCaseRange)) {
      let code = charCode + shift;
      code = code > upperCaseRange[1] ? (code - upperCaseRange[1] + upperCaseRange[0] - 1) : code;
      encodeResult += String.fromCharCode(code);
    } else {
      encodeResult += str[i];
    }
  }
  
  return encodeResult;
};

module.exports = encode;
