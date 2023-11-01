let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const result = fs.readFileSync(filePath).toString().split("\n");
const screen = result.slice(1).map((v) => v.split("").map((vv) => +vv));
let quadTree = [];
let n = result[0];
const recursion = (n, x, y) => {
  let total = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      total += screen[y + j][x + i];
    }
  }
  if (total === 0) quadTree.push("0");
  else if (total === n * n) quadTree.push("1");
  else {
    n /= 2;
    quadTree.push("(");
    recursion(n, x, y);
    recursion(n, x + n, y);
    recursion(n, x, y + n);
    recursion(n, x + n, y + n);
    quadTree.push(")");
  }
};
recursion(n, 0, 0);

console.log(quadTree.join(""));