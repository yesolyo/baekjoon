function solution(a, b) {
    return a.reduce((acc,cur,i)=>acc+cur*b[i],0);
    
}
//1. a,b의 각 자릿수마다 곱한다.
//2. 곱한 수 들을 더한다.