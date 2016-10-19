module.exports = {
  main: function(input) {
    return main(input);
  }
};

var input = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736';

function main(input) {
	var binary = hex2bin(input);
	var results = [];

	for (var i = 32; i <= 126; i++) {
		var key = '' + parseInt(i, 10).toString(2);
		while (key.length < 8) {
			key = '0' + key;
		}

		var output = xor(binary, key);
		output = bin2hex(output);
		output = hex2str(output);

		results.push({score: score(output), output: output, key: String.fromCharCode(i)});
	}

	return results;
}

function hex2bin(input) {
	var output = '';
	for (var i = 0; i < input.length; i++){
		var s = '' + parseInt(input[i], 16).toString(2);
	  while (s.length < 4) {
			s = '0' + s;
		}
    output += s;
	}
	return output;
}

function bin2hex(input) {
	var f = '';
	for (var j = 0; j < input.length; j += 4) {
		var s = input.substring(j, j + 4);
		f += parseInt(s, 2).toString(16);
	}
	return f;
}

function hex2str(input) {
	var output = '';
	for (var j = 0; j < input.length; j += 2) {
		var s = input.substring(j, j + 2);
		output += String.fromCharCode(parseInt(s, 16).toString(10));
	}
	return output;
}

function score(input) {
	var score = 0;
	score += (input.match(/a/g)||[]).length;
	score += (input.match(/e/g)||[]).length;
	score += (input.match(/i/g)||[]).length;
	score += (input.match(/o/g)||[]).length;
	score += (input.match(/u/g)||[]).length;
	return score;
}

function xor(a, b) {
	var output = '';
	for (var i = 0; i < a.length; i++) {
		output += a[i] === b[i % b.length] ? '0' : '1';
	}
	return output;
}
