function solution(n, arr1, arr2) {
    let result='';
    const answer=[];
    for(let i=0; i<n;i++){
        arr1[i]=arr1[i].toString(2);
        arr2[i]=arr2[i].toString(2);
        if(arr1[i].length!==n) {
            arr1[i]=('0'.repeat(n-arr1[i].length))+ arr1[i]};
        if(arr2[i].length!==n) {
            arr2[i]=('0'.repeat(n-arr2[i].length))+ arr2[i]};
        arr1[i]=arr1[i].split("").map((e)=>Number(e));
        arr2[i]=arr2[i].split("").map((e)=>Number(e));
        for(let j=0; j<n; j++){
            if(arr1[i][j]===1 || arr2[i][j] ===1){
                result += '#';
            } else {
                result += ' ';
            }

        }
        answer.push(result);
        result = '';
    }
    return answer;

}