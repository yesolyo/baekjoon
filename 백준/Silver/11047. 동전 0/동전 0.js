let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");
const [n, k] = input[0].split(" ");

const getCoinList = (stringList) => {
  const coinList = [];
  for (let i = stringList.length - 1; i > 0; i--) {
    coinList.push(Number(stringList[i]));
  }
  return coinList;
};

const getMinCoinNumber = (coinList, k) => {
  let min = 0;
  let price = k;
  for (let i = 0; i < coinList.length; i++) {
    if (coinList[i] <= price) {
      min += parseInt(price / coinList[i]);
      price = price % coinList[i];
    }
  }
  return min;
};

const coinList = getCoinList(input);
const min = getMinCoinNumber(coinList, k);

console.log(min);
