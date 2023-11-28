let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");
const n = Number(input[0]);
const heightList = input[1].split(" ").map(Number);

const getMinCount = (n, heightList) => {
  let arrow = Array(1000001).fill(0);
  let result = 0;
  for (let x of heightList) {
    if (arrow[x] > 0) {
      arrow[x] -= 1;
      arrow[x - 1] += 1;
    } else {
      arrow[x - 1] += 1;
      result += 1;
    }
  }
  return result;
};

console.log(getMinCount(n, heightList));