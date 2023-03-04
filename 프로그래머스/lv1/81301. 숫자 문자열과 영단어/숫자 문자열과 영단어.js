/*function solution(s) {
    let words=[/zero/gi,/one/gi,/two/gi,/three/gi,/four/gi,/five/gi,/six/gi,/seven/gi,/eight/gi,/nine/gi]
    words.forEach((e,i)=> s = s.replace(e,i));
    return Number(s);
}*/

function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = s;
    for(let i=0; i<numbers.length;i++){
        let arr = answer.split(numbers[i]);
        answer=arr.join(i);
    }
    return Number(answer);
}