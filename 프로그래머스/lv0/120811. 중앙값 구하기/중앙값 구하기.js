function solution(array) {
  var answer = 0;
  array.sort((a, b) => a - b);
  let median = Math.floor(array.length / 2);
  answer = array[median];
  return answer;
}

//1. 배열을 오름차순 정렬한다.
//2. 배열의 중간 값을 구한다.