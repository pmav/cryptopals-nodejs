var input = '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d';

var table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function hex2bin(input) {
  var output = '';
  for (var i = 0; i < input.length; i++) {
    var token = parseInt(input[i], 16).toString(2);

    while(token.length < 4) {
      token = '0' + token;
    }

    output += token;
  }

  return output;
}

function bin2dec(binary) {
  return parseInt(binary, 2);
}


function main() {
  var binaryString = hex2bin(input);

  var output = '';
  for (var i = 0; i < binaryString.length / 6; i++) {
    var token = binaryString.substring(i * 6 , (i + 1) * 6);
    output += table[bin2dec(token)];
  }

  console.log(output);
}

main();
