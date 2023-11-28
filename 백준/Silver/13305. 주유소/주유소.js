let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const roadLength = input[1].split(" ").map(Number);
const oilPrice = input[2].split(" ").map(Number);

const getTotalPrice = (roadLength, oilPrice) => {
  let minValue = oilPrice[0];
  let totalPrice = oilPrice[0] * roadLength[0];

  for (let i = 1; i < oilPrice.length - 1; i++) {
    if (minValue > oilPrice[i]) {
      minValue = oilPrice[i];
      totalPrice += minValue * roadLength[i];
    } else {
      totalPrice += minValue * roadLength[i];
    }
  }
  return totalPrice;
};

console.log(getTotalPrice(roadLength, oilPrice));