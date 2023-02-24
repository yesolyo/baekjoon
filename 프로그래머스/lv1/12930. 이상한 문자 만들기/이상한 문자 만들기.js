function solution(s) {
    return s.split(" ").map((a)=>a.split("").map((b,i) =>i % 2 === 0 ? b.toUpperCase():b.toLowerCase()).join("")).join(" ");
}
/*
1. 문자열 짝수번째 알파벳은 대문자, 홀수번째 알파벳은 소문자로 변경한다.
2. 배열로 변환한다.
3. index를 이용하여 대소문자를 구별한다.
*/