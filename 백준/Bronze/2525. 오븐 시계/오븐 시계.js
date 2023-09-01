let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let startTime = input[0].split(" ");
let currentTime = Number(input[1]);
const ovenTime = () => {
  let time = currentTime + Number(startTime[1]);
  if (time >= 60) {
    let hour = parseInt(time / 60);
    let minute = time - hour * 60;
    if (Number(startTime[0]) + hour >= 24) {
      return console.log(Number(startTime[0]) + hour - 24 + " " + minute);
    }
    return console.log(Number(startTime[0]) + hour + " " + minute);
  }
  return console.log(startTime[0] + " " + time);
};

ovenTime();