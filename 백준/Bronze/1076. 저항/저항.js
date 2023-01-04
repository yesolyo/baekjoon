let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .replace(/\r/g, "")
  .split("\n");

const color = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

const answer = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < color.length; j++) {
    if (input[i] === color[j]) {
      answer[i] = j;
    }
  }
}

let add = String(answer[0]) + String(answer[1]);
let result = Number(add) * 10 ** answer[2];

console.log(result);