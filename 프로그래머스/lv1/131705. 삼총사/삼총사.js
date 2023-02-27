function solution(number) {
    let result= 0;
    for(let i=0; i<number.length-2 ;i++){
        for(let j=i+1; j<number.length-1; j++){
            for(let z=j+1; z<number.length; z++){
                if(number[i]+number[j]+number[z] === 0){
                    result++;
                }
            }
        }
    }
    return result;
}
/*
1. for문을 세번 돌린다.
2. 서로의 자릿 수는 겹치기 않게 설정한다.
3. 만약 세자리를 더했는데 0이 아니라면 continue, 세자리가 0이면 count를 증가 시킨다. */