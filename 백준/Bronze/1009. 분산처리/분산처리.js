let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .replace(/\r/g, "")
  .split("\n");

const numbers = [];
let pow = 1;
for (let i = 0; i < input.length; i++) {
  if (/\s/g.test(input[i]) === true) {
    numbers.push(input[i].split(" ").map(Number));
  }
}

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers[i][1]; j++) {
    pow = (pow * numbers[i][0]) % 10;
  }

  if (pow === 0) {
    console.log(10);
  } else {
    console.log(pow);
  }
  pow = 1;
}