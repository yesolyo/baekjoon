let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const result = fs.readFileSync(filePath).toString().trim();

const solution = (input) => {
  if (input.includes(0) && input.includes(1)) {
    const one = input.split(0).filter((o) => o !== "").length;
    const zero = input.split(1).filter((z) => z !== "").length;
    return one > zero ? zero : one;
  } else {
    return 0;
  }
};

console.log(solution(result));