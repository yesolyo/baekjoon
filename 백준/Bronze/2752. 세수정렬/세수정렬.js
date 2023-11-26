let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split(" ").map(Number);

const sorted = (value) => {
  value.sort((a, b) => a - b);
  return value;
};

console.log(sorted(input).join(" "));