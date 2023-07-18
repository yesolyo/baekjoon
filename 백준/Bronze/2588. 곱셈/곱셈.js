let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input1 = Number(input[0]);
let input2 = input[1].split('').map(Number)
console.log(input1*input2[2]);
console.log(input1*input2[1]);
console.log(input1*input2[0]);
console.log(Number(input[0])*Number(input[1]));