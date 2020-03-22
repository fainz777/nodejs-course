const input = 'This is secret. Message about "_" symbol!';
const output = 'Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!';
const shift = 7;

const lowerCaseRange = [97, 122];
const upperCaseRange = [65, 90];

const isInRange = (charCode, range) => {
  return charCode >= range[0] && charCode <= range[1];
};

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



const run = () => {
  const encodeResult = encode(input, shift);
  console.log('encodeResult: ', encodeResult, encodeResult === output);
  
  const decodeResult = decode(output, shift);
  console.log('decodeResult: ', decodeResult, decodeResult === input);
};


run();
