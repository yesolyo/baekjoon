let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("").map(Number);

const getSortedNumbers = (numberList) => {
  return [...numberList].sort((a, b) => b - a);
};
console.log(getSortedNumbers(input).join(""));