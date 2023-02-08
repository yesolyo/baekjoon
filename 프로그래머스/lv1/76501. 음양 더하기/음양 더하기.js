function solution(absolutes, signs) {
    return absolutes.reduce((a,b,i)=>a+(b*(signs[i]?1:-1)),0);
}
//1. signs값이 true면 absolutes값은 1이 곱해진다.
//2. signs값이 false면 absolutes값은 -1이 곱해진다.
//3. absolutes의 모든 값을 더한다.