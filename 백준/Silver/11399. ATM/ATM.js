let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");
const coinList = input[1].split(" ").map(Number);

const getSortedList = (numberList) => {
  const sortedList = [...numberList];
  sortedList.sort((a, b) => a - b);

  return sortedList;
};

const sumCoins = (coinList) => {
  let sumCoin = 0;
  let totalCoinList = [];
  for (let i = 0; i < coinList.length; i++) {
    sumCoin += coinList[i];
    totalCoinList.push(sumCoin);
  }
  return totalCoinList;
};

const minTimeSum = (timeList) => {
  const total = timeList.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return total;
};

const sortedList = getSortedList(coinList);
const totalCoinList = sumCoins(sortedList);
const total = minTimeSum(totalCoinList);

console.log(total);