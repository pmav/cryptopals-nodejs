var readline = require('readline');

var key = str2bytes('ICE');
var currentKeyPosition = 0;

function processInput(input) {
  var payload = str2bytes(input);
  var bytes = xor(payload);

  console.log(bytes2hex(bytes));
}

function xor(bytes) {
  var resultBytes = [];

  for (var i = 0; i < bytes.length; i++) {
    resultBytes.push(xorBytes(bytes[i], key[currentKeyPosition % key.length]));
    currentKeyPosition++;
  }

  return resultBytes;
}

function xorBytes(bytes1, bytes2) {
  var byte = '';

  for (var i = 0; i < bytes1.length; i++) {
    byte += bytes1[i] === bytes2[i] ? '0' : '1';
  }

  return byte;
}

function bytes2hex(bytes) {
  var output = '';

  for (var i = 0; i < bytes.length; i++) {
    output += parseInt(bytes[i].substring(0, 4), 2).toString(16);
    output += parseInt(bytes[i].substring(4, 8), 2).toString(16);
    output += ' ';
  }

  return output;
}

function str2bytes(input) {
  var bytes = [];

  for (var i = 0; i < input.length; i++) {
    console.log(input[i]);
    var byte = input.charCodeAt(i).toString(2);
    bytes.push(pad(byte));
  }

  return bytes;
}

function pad(input) {
  return String('00000000' + input).slice(-8);
}

function main() {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  rl.on('line', function(line) {
      processInput(line);
  });
}

main();
