function solution(numbers,s=[0,1,2,3,4,5,6,7,8,9]) {
    return s.reduce((a,b)=>a+b)-numbers.reduce((a,b)=>a+b);
}
//1. 1부터 9까지 더한다.
//2. numbers안에 숫자 더한다.
//3. 서로 뺀다.