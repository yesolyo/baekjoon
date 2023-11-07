let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());
let str = "";

const printScreen = () => {
  for (let i = 0; i < input; i++) {
    for (let j = 0; j < input; j++) {
      drawStar(i, j);
    }
    str += "\n";
  }
  return str;
};
const drawStar = (i, j) => {
  if (i % 3 === 1 && j % 3 === 1) {
    str += " ";
  } else {
    if (Math.floor(i / 3) === 0 && Math.floor(j / 3) === 0) {
      str += "*";
    } else {
      drawStar(Math.floor(i / 3), Math.floor(j / 3));
    }
  }
};

console.log(printScreen());