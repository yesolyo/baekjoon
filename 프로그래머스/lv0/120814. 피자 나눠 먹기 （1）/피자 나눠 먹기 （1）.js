function solution(n) {
  var answer = 0;
  answer = Math.ceil(n / 7);
  return answer;
}
// 1. n을 7로 나눈다.
// 2. n이 나눠 떨어지면 1로 표시한다. 
// 2. n이 7보다 작을때는 1로 표시한다.
// 3. n이 7보다 클 경우에는 나눈 값을 올려서 표시한다.
