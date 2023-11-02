let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const quadTree = [];
const N = Number(input[0]);
const screen = input.slice(1).map((s) => s.split("").map(Number));

const compression = (n, x, y) => {
  let total = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      total += screen[y + j][x + i];
    }
  }
  if (total === 0) quadTree.push(0);
  else if (total === n * n) quadTree.push(1);
  else {
    n = n / 2;
    quadTree.push("(");
    compression(n, x, y);
    compression(n, x + n, y);
    compression(n, x, y + n);
    compression(n, x + n, y + n);
    quadTree.push(")");
  }
};
compression(N, 0, 0);

console.log(quadTree.join(""));