let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const changeXYList = (stringList) => {
  const XYList = [];
  for (let i = 1; i < stringList.length; i++) {
    XYList.push(stringList[i].split(" ").map(Number));
  }
  return XYList;
};

const sortedNumber = (numberList) => {
  numberList.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  return numberList;
};

const XYList = changeXYList(input);
const sortedNumberList = sortedNumber(XYList);
let answer = "";
for (let i = 0; i < sortedNumberList.length; i++) {
  answer += sortedNumberList[i][0] + " " + sortedNumberList[i][1] + "\n";
}
console.log(answer);
