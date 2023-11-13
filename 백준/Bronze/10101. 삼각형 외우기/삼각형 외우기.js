let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [a, b, c] = fs
  .readFileSync(filePath, "utf-8")
  .trim()
  .split("\n")
  .map(Number);

const solution = (a, b, c) => {
  if (a + b + c !== 180) return "Error";
  else {
    if (a === b) {
      if (a === c) return "Equilateral";
      else return "Isosceles";
    } else {
      if (a === c || b === c) return "Isosceles";
      else return "Scalene";
    }
  }
};

console.log(solution(a, b, c));