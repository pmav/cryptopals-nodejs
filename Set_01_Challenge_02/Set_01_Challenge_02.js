var input1 = '1c0111001f010100061a024b53535009181c';
var input2 = '686974207468652062756c6c277320657965';

function main() {
  var a = hex2bin(input1);
  var b = hex2bin(input2);

  console.log(bin2hex(xor(a, b)));
}

function xor(input1, input2) {
  var xorString = '';
  for (var i = 0; i < input1.length; i++) {
    var a = input1[i];
    var b = input2[i];

    xorString += a === b ? '0' : '1';
  }

  return xorString;
}


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


function bin2hex(input) {
  var output = '';

  for (var i = 0; i < input.length / 4; i++) {
    var token = input.substring(i * 4 , (i + 1) * 4);
    output += parseInt(token, 2).toString(16);
  }

  return output;
}

main();
