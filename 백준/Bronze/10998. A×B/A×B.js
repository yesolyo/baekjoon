let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let answer = input[0].split(' ');

let result = answer.reduce((a,b)=>parseInt(a)*parseInt(b));

console.log(result);