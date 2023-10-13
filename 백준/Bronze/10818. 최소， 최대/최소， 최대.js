let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [count, set] = fs.readFileSync(filePath).toString().split("\n");
let result = set.split(" ").map((a) => Number(a));
let Max = result.reduce((a, b) => {
  return Math.max(a, b);
});

let Min = result.reduce((a, b) => {
  return Math.min(a, b);
});
console.log(Min, Max);