let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");
const firstList = input[0].split(" ").map(Number);
const numberList = input[1].split(" ").map(Number);

const sortedNumber = (numberList) => {
  numberList.sort((a, b) => a - b);
  return numberList;
};

const sortedNumberList = sortedNumber(numberList);

console.log(sortedNumberList[firstList[1] - 1]);