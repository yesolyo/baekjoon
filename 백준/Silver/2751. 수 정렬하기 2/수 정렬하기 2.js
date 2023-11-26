let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n").map(Number);

const addNumberToList = (list) => {
  const numberList = [];
  for (let i = 1; i < list.length; i++) {
    numberList.push(list[i]);
  }
  return numberList;
};

const sortedNumber = (numberList) => {
  numberList.sort((a, b) => a - b);
  return numberList;
};

const newNumberList = addNumberToList(input);
const sortedNumberList = sortedNumber(newNumberList);

console.log(sortedNumberList.join("\n"));