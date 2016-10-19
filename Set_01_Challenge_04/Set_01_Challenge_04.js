var readline = require('readline');
var challenge03 = require("./Set_01_Challenge_03.js");

function processInput(input) {
  var results = challenge03.main(input);

  for (var i = 0; i < results.length; i++) {
    if (results[i].score >= 7) {
      console.log(results[i]);
    }
  }
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
