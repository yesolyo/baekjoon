let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let H = Number(input[0]);
let M = Number(input[1]);

const Check = () => {
  if (M < 45) {
    H -= 1;
    M += 15;
    if (H < 0) H = 23;
  } else {
    M -= 45;
  }
  return console.log(H + " " + M);
};

Check();
