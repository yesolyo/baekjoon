function solution(arr, divisor) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  if (answer.length === 0) {
    answer.push(-1);
  }
  answer.sort((a,b)=>a-b);
  return answer;
}

//1. arr 배열의 element를 꺼내서 divisor나눈다.
//2. divisor을 나눠서 0으로 떨어지는 숫자는 배열에 저장한다.
//3. 만약 떨어지는 숫자가 없다면 -1을 반환한다.