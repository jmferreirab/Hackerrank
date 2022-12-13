const readline = require('readline').createInterface(
  {
    input: process.stdin,
    output: process.stdout,
  },
);

const { PI } = Math;

let radius;
parseFloat(readline.question('Radius?', (r) => { radius = r; main(); }));

function perimeter() {
  return 2 * PI * radius;
}
function area() {
  return radius * radius * PI;
}

function main() {
  console.log(perimeter(radius));
  console.log(area(radius));
}
