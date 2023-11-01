let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let result = fs.readFileSync(filePath).toString().split("\n");
const nLlist = result[1].split(" ");
const mList = result[3].split(" ");

const map = new Map();

nLlist.forEach((n) => map.set(n, map.get(n) + 1 || 1));
mList.forEach((m, i) => (mList[i] = map.get(m) || 0));

console.log(mList.join(" "));