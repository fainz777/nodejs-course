# Prerequirement
1. Install [Node.js](https://nodejs.org/en/download/) 
2. Clone this repository.
3. Go to folder **nodejs-course**.

## Caesar cipher CLI tool
**Implement CLI tool that will encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)**.
### How to run
1. Go to folder **caesar-cipher**
2. Run **npm i** to install node modules.
3. Run code with this options:
 - **-s, --shift**: a shift (required)
 - **-i, --input**: an input file
 - **-o, --output**: an output file
 - **-a, --action**: an action encode/decode (required)

**Examples**
```bash
$ node index -s 10 -i input/input-encode.txt -o output/output.txt -a encode
```
```bash
$ node index -s 10 -i input/input-decode.txt -o output/output.txt -a decode
```
