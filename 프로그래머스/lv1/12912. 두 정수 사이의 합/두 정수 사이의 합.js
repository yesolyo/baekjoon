function solution(a, b, sum=0 ) {
    for(let i=Math.min(a,b); i<=Math.max(a,b); i++) {
        sum+= i;
    }
    return sum;
}