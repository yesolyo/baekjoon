let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().split("\n");
let testCase = Number(input[0]);

const palidron = (x) => {
  return x === x.split("").reverse().join("");
};

for (let tc = 1; tc <= testCase; tc++) {
  let data = input[tc];
  if (palidron(data)) console.log(0);
  else {
    let found = false;
    let n = data.length;
    for (let i = 0; i < parseInt(n / 2); i++) {
      if (data[i] !== data[n - i - 1]) {
        if (palidron(data.slice(0, i) + data.slice(i + 1, n))) found = true;
        if (palidron(data.slice(0, n - i - 1) + data.slice(n - i, n)))
          found = true;
        break;
      }
    }
    if (found) console.log(1);
    else console.log(2);
  }
}
