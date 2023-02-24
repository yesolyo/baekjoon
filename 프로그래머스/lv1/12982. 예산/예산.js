function solution(d, budget) {
    let count=0;
    let sorted= d.sort((a,b)=>a-b);
    for(let i=0; i<sorted.length; i++){
        if(sorted[i]<=budget){
            budget-=sorted[i];
            count+=1;
        } 
    }
    return count;
}
/*
1. 좀 더 많은 부서를 배치하기 위해서 d를 오름차순 정렬한다.
2. 정렬한 숫자 순서대로 budget을 빼는데 budget이 빼려는 숫자보다 클 경우에만 뺀다.
3. 뺀 횟수를 count 한다.
*/