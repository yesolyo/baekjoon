function solution(n) {
  var answer = 1;
  while (true) {
    if ((6 * answer) % n === 0) {
      return answer;
    }
    answer += 1;
  }
}
