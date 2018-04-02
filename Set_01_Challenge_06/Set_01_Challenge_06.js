
function processInput(input) {
  var MIN_KEY_SIZE = 2;
  var MAX_KEY_SIZE = 40;
  var BEST_KEY_SIZES_TO_PROCESS = 4;

  var bits = hex2bin(Buffer.from(input, 'base64'));


  var keyScores = [];

  for (var keySize = MIN_KEY_SIZE; keySize < MAX_KEY_SIZE; keySize++) {
    var m1 = bits.substring(0, keySize);
    var m2 = bits.substring(keySize, keySize*2);

    var score = hamming(m1, m2) / keySize;
    keyScores.push({'size':keySize, 'score':score})
  }

  keyScores.sort(function(a, b) {
    return a.score - b.score;
  });

  console.log(keyScores);

  for (var i = 0; i < BEST_KEY_SIZES_TO_PROCESS; i++) {

    var keySize = keyScores[i].size;
    console.log(keySize);
    var a = [];
    for (var j = 0; j < bits.length; j = j + keySize) {
      a.push(bits.substring(j, j + keySize));
    }
    console.log(a);
  }
}

function hamming(b1, b2) {
  //var b1 = str2bytes(s1).join();
  //var b2 = str2bytes(s2).join();

  var distance = 0;
  for (var i = 0; i < b1.length; i++) {
    if (b1[i] !== b2[i]) {
      distance++;
    }
  }
  return distance;
}


function pad(input) {
  return String('00000000' + input).slice(-8);
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


function str2bytes(input) {
  var bytes = [];

  for (var i = 0; i < input.length; i++) {
    var byte = input.charCodeAt(i).toString(2);
    bytes.push(pad(byte));
  }

  return bytes;
}


function main() {
  var content = Buffer.alloc(0);
  process.stdin.resume();
  process.stdin.on('data', function(buf) { content = Buffer.concat([content, buf]) });
  process.stdin.on('end', function() {
      // your code here
      processInput(content.toString().replace(/\n/g, ''));
  });

}

main();
