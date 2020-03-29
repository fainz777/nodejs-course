const fs = require('fs');

const readFile = (path) => {
  try {
    fs.accessSync(path, fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK);
    return fs.readFileSync(path, 'utf8');
  } catch (error) {
    console.error(
    `${path}: ${error.code === 'ENOENT' ? 'No such file' : 'An attempt was made to access a file in a way forbidden by its file access permissions'}`);
    process.exit(1);
  }
};

const writeFile = (path, content) => {
  let fileContent = readFile(path);
  fileContent += `${content}`;
  fs.writeFileSync(path, fileContent);
};

module.exports = {
  readFile,
  writeFile
};
