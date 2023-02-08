function solution(numbers) {
    return 45-numbers.reduce((a,b)=>a+b,0);
}
//1. 1부터 9까지 더한다.
//2. numbers안에 숫자 더한다.
//3. 서로 뺀다.