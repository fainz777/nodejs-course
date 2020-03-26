const {program} = require('commander');
const readline = require('readline')
const encode = require('./encode');
const decode = require('./decode');

let input; // = 'This is secret. Message about "_" symbol!';
let output; // = 'Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!';
let shift; // = 7;

const actions = {
  encode,
  decode
};

program
  .requiredOption('-s, --shift <number>', 'Caesar cipher shift')
  .option('-i, --input <path>', 'An input file')
  .option('-o, --output <path>', 'An output file')
  .requiredOption('-a, --action <type>', 'An action encode/decode');

program.parse(process.argv);

shift = parseInt(program.shift);

if (!program.input) {
  input = 'This is secret. Message about "_" symbol!';
}

if (!program.output) {
  output; // = 'Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!';
}



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`);
  
  input = name;
  
  if (actions[program.action]) {
    const r = actions[program.action](input, shift);
    console.log(program.action, r);
  } else {
    console.log(`The action should be one of ${Object.keys(actions).join(' or ')}, but is: ${program.action}`);
  }
  
  
  rl.close();
});


const run = () => {
  if (actions[program.action]) {
    const r = actions[program.action](input, shift);
    console.log(program.action, r);
  } else {
    console.log(`The action should be one of ${Object.keys(actions).join(' or ')}, but is: ${program.action}`);
  }
};


//run();
