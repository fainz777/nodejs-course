const {program} = require('commander');
const readline = require('readline')
const {readFile, writeFile} = require('./fileManager');
const encode = require('./encode');
const decode = require('./decode');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input;
let output;
let shift;

const actions = {
  encode,
  decode
};

const doAction = (input, action, shift) => {
  if (actions[action]) {
    return actions[action](input, shift);
  } else {
    console.error(`The action should be one of ${Object.keys(actions).join(' or ')}, but is: ${program.action}`);
    process.exit(1);
  }
};

const outputResult = (output) => {
  if (program.output) {
    writeFile(program.output, output);
    process.exit(0);
  } else {
    console.log(output)
    process.exit(0);
  }
};

program
  .requiredOption('-s, --shift <number>', 'Caesar cipher shift')
  .option('-i, --input <path>', 'An input file')
  .option('-o, --output <path>', 'An output file')
  .requiredOption('-a, --action <type>', 'An action encode/decode');

program.parse(process.argv);

shift = parseInt(program.shift) % 26;

if (program.input) {
  input = readFile(program.input);
  output = doAction(input, program.action, shift);
  outputResult(output);
} else {
  rl.question(`Enter your string: `, str => {
    input = str;
    output = doAction(input, program.action, shift);
    outputResult(output);
    rl.close();
  });
}


