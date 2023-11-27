let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [A, B] = fs.readFileSync(filePath, "utf-8").trim().split(" ").map(Number);

const getMinNumber = (A, B) => {
  let min = 1;
  let flag = false;
  while (A <= B) {
    if (A === B) {
      flag = true;
      break;
    }

    if (B % 2 === 0) B = parseInt(B / 2);
    else if (B % 10 === 1) B = parseInt(B / 10);
    else break;
    min++;
  }

  if (flag) return min;
  else return -1;
};

console.log(getMinNumber(A, B));