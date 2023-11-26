let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");
const inputList = input[1].split(" ").map(Number);
const sortedList = (numberlist) => {
  const list = [...numberlist];
  const sortedNumberList = list.sort((a, b) => a - b);
  return [...new Set(sortedNumberList)];
};

const makeRankingList = (list) => {
  const map = new Map();
  list.forEach((number, index) => {
    map.set(number, index);
  });
  return map;
};

const numberList = sortedList(inputList);

const rankingList = makeRankingList(numberList);
let answer = "";
for (let i = 0; i < inputList.length; i++) {
  answer += rankingList.get(inputList[i]) + " ";
}
console.log(answer);