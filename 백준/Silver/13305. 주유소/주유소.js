let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const n = Number(input[0]);
const roadLength = input[1].split(" ").map(Number);
const oilPrice = input[2].split(" ").map(Number);

const getTotalPrice = (n, roadLength, oilPrice) => {
  let minValue = oilPrice[0];
  let totalPrice = BigInt(0);

  for (let i = 1; i < n; i++) {
    minValue = Math.min(minValue, oilPrice[i]);
    oilPrice[i] = minValue;
  }

  for (let i = 0; i < n - 1; i++) {
    totalPrice += BigInt(oilPrice[i]) * BigInt(roadLength[i]);
  }
  return String(totalPrice);
};

console.log(getTotalPrice(n, roadLength, oilPrice));
