let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");
const n = Number(input[0]);

const getTotalPrice = (n, input) => {
  const timeList = [];
  for (let i = 1; i <= n; i++) timeList.push(input[i].split(" ").map(Number));

  timeList.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  let cur = 0,
    count = 1;
  for (let i = 1; i < n; i++) {
    if (timeList[cur][1] <= timeList[i][0]) {
      cur = i;
      count++;
    }
  }
  return count;
};

console.log(getTotalPrice(n, input));