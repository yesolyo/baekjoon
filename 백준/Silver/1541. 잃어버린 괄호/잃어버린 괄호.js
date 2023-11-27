let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("-");
const numberList = input.map((a) => a.split("+").map(Number));

const caculator = (numberList) => {
  let sum = 0;
  let answer = [];
  for (let i = 0; i < numberList.length; i++) {
    sum = numberList[i].reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    answer.push(sum);
  }
  return answer.reduce((acc, cur) => acc - cur);
};

console.log(caculator(numberList));