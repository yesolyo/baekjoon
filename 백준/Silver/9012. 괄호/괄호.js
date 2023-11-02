let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const len = input.shift();
const result = [];

for (let i = 0; i < len; i++) {
  let count = 0;
  for (const s of input[i]) {
    count += s === "(" ? 1 : -1;
    if (count < 0) break;
  }
  result.push(count === 0 ? "YES" : "NO");
}

console.log(result.join("\n"));
