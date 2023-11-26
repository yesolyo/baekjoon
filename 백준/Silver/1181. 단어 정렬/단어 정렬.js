let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const changeStringList = (list) => {
  const stringList = [];
  for (let i = 1; i < list.length; i++) {
    stringList.push(list[i]);
  }
  return stringList;
};

const sortedString = (stringList) => {
  stringList.sort((a, b) => {
    if (a.length === b.length) {
      if (a < b) return -1;
      else if (a > b) return 1;
      else return 0;
    }
    return a.length - b.length;
  });
  const set = new Set(stringList);
  return set;
};

const stringList = changeStringList(input);
const sortedNumberList = sortedString(stringList);
let answer = "";
sortedNumberList.forEach((number) => (answer += number + "\n"));

console.log(answer);