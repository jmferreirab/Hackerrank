/* Solutions for

https://www.hackerrank.com/challenges/js10-switch
https://www.hackerrank.com/challenges/js10-loops

*/

/* eslint-disable no-console */
function firstOfSet(s) {
  const letter = s.charAt(0);
  let output;
  switch (letter) {
    // Using ? so that if no match is found, undefined is returned (so false)
    case letter.match('[aeiou]')?.[0]:
      output = 'A';
      break;
    case letter.match('[bcdfg]')?.input:
      output = 'B';
      break;
    case letter.match('[hjklm]')?.input:
      output = 'C';
      break;
    case letter.match('[npqrstvwxyz]')?.input:
      output = 'D';
      break;
    default:
      output = '-1';
  }

  console.log(output);
  return output;
}

firstOfSet('manuel');

function vowelsAndConsonants(s) {
  const vowels = [];
  const cnsonts = [];
  s.split('').forEach((x) => {
    if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
      vowels.push(x);
    } else {
      cnsonts.push(x);
    }
  });

  const all = vowels.concat(cnsonts);
  all.forEach((x) => console.log(x));
}

vowelsAndConsonants('manuel');

process.exit();
