let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim();
const getFrequencyList = (input) => {
  const frequencyList = Array(10).fill(0);
  for (let x of input) {
    frequencyList[Number(x)]++;
  }
  return frequencyList;
};

const getSortedNumbers = (frequencyList) => {
  let answer = "";
  for (let i = frequencyList.length - 1; i >= 0; i--) {
    for (let j = 0; j < frequencyList[i]; j++) {
      answer += i + "";
    }
  }
  return answer;
};
const frequencyList = getFrequencyList(input);
const answer = getSortedNumbers(frequencyList);
console.log(answer);
