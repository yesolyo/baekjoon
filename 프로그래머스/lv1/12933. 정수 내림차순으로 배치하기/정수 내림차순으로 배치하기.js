function solution(n) {
    let answer=[];
    while(n>0){
        answer.push(n%10);
        n=parseInt(n/10);
    }
    let result=answer.sort((a,b)=>b-a).map(e=>String(e));
    return Number(result.join(''));
}