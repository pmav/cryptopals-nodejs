var readline = require('readline');

function processInput(input) {

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
