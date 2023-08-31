let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let grade = parseInt(input);
let answer;
if (grade >= 90 && grade <= 100) answer = "A";
else if (grade >= 80 && grade <= 89) answer = "B";
else if (grade >= 70 && grade <= 79) answer = "C";
else if (grade >= 60 && grade <= 69) answer = "D";
else answer = "F";
return console.log(answer);