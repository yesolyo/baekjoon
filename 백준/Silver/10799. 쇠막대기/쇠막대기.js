let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const result = fs.readFileSync(filePath).toString().trim();

const solution = (input) => {
  let count = 0;
  let stack = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(" && input[i + 1] === ")") {
      count += stack.length;
      i++;
    } else if (input[i] === "(") {
      stack.push(input[i]);
    } else if (input[i] === ")") {
      stack.pop();
      count++;
    }
  }
  return count;
};

console.log(solution(result));