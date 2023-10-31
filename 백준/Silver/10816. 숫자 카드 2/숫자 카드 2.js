let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let result = fs.readFileSync(filePath).toString().split("\n");
const nList = result[1].split(" ");
const mList = result[3].split(" ");
const map = new Map();
nList.forEach((n) => {
  if (map.has(n)) map.set(n, map.get(n) + 1);
  else map.set(n, 1);
});

mList.forEach((m, i) => {
  if (map.has(m)) mList[i] = map.get(m);
  else mList[i] = 0;
});

console.log(mList.join(" "));