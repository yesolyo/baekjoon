let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let result = fs.readFileSync(filePath).toString().split("\n").map(Number);
const set = new Set();
for (let i = 0; i < 10; i++) {
  set.add(result[i] % 42);
}

console.log(set.size);
