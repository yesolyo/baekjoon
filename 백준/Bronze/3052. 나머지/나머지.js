let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let result = fs.readFileSync(filePath).toString().split("\n").map(Number);
const arr = [];
for (let i = 0; i < 10; i++) {
  const a = result[i] % 42;
  arr.push(a);
}

const set = new Set(arr);

console.log(set.size);
