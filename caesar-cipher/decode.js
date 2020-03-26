const {lowerCaseRange, upperCaseRange} = require('./constants');
const {isInRange} = require('./utils');

const decode = (str, shift) => {
  let decodeResult = '';
  
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    
    if (isInRange(charCode, lowerCaseRange)) {
      let code = charCode - shift;
      code = code < lowerCaseRange[0] ? (lowerCaseRange[1] - (lowerCaseRange[0] - code) + 1) : code;
      decodeResult += String.fromCharCode(code);
    } else if (isInRange(charCode, upperCaseRange)) {
      let code = charCode - shift;
      code = code < upperCaseRange[0] ? (upperCaseRange[1] - (upperCaseRange[0] - code) + 1) : code;
      decodeResult += String.fromCharCode(code);
    } else {
      decodeResult += str[i];
    }
  }
  
  return decodeResult;
};

module.exports = decode;
