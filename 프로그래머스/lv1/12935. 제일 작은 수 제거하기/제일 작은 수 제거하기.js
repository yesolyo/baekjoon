function solution(arr) {
    return arr.length>1? arr.filter((v)=> v > Math.min(...arr)) : [-1];
}
//1. 배열에서 제일 작은 수를 찾는다.
//2. 제일 작은 수보다 큰값을 보여준다.
//3. 만약 배열 길이가 2보다 작으면 [-1]을 리턴한다.