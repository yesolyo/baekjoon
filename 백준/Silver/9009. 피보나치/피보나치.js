let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");
const n = Number(input[0]);

const getPibo = () => {
  const pibo = [];
  pibo.push(0, 1);
  while (pibo[pibo.length - 1] < 1e9)
    pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1]);
  return pibo;
};

const getMaxNumber = (pibo, input) => {
  const testCase = Number(input[0]);
  for (let i = 1; i <= testCase; i++) {
    let n = Number(input[i]);
    let answer = [];
    let piboIndex = pibo.length - 1;

    while (n > 0) {
      if (n >= pibo[piboIndex]) {
        n -= pibo[piboIndex];
        answer.push(pibo[piboIndex]);
      }
      piboIndex--;
    }
    console.log(answer.reverse().join(" "));
  }
};

const pibo = getPibo();
getMaxNumber(pibo, input);