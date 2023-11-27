let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim();

const getMinNumber = (input) => {
  let min = 0;
  let flag = false;
  while (input >= 0) {
    if (input === 0 || input % 5 === 0) {
      min += parseInt(input / 5);
      flag = true;
      return min;
    }
    input -= 3;
    min += 1;
  }
  if (!flag) {
    return -1;
  }
};

console.log(getMinNumber(Number(input)));
