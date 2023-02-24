function solution(s) {
    let result = "";
    let arr=s.split(" ");
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            if(j%2 ===0 ){
                result+=arr[i][j].toUpperCase();
                
            } else{
                result+=arr[i][j].toLowerCase();
            }
        }
        if(i<arr.length-1){
            result += " ";
        }
    }
    return result;
}
/*
1. 문자열 짝수번째 알파벳은 대문자, 홀수번째 알파벳은 소문자로 변경한다.
2. 배열로 변환한다.
3. index를 이용하여 대소문자를 구별한다.
*/