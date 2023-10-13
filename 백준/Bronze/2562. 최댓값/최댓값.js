let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let result = fs.readFileSync(filePath).toString().split("\n").map(Number);

const Max = result.reduce((a, b) => {
  return Math.max(a, b);
});

const MaxCount = result.findIndex((a) => a === Max) + 1;
console.log(Max, MaxCount);