let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const n = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const getMaxNumber = (n) => {
  let sum = 1;
  let max = 1;
  while (sum <= n) {
    max++;
    sum += max;
  }
  return max - 1;
};

console.log(getMaxNumber(Number(n)));