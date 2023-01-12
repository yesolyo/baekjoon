function solution(array) {
  array.sort((a, b) => a - b);

  let cnt = 0;
  let mode = -1; //최빈값이 무엇인지
  let modeCount = 0; //최빈값이 될때 몇번 반복해서 되는 것인지
  let repeatCount = 0; //현재 똑같은 숫자가 몇번 등장했는지
  let beforeNumber = -1; // 이전 값

  while (cnt < array.length) {
    if (beforeNumber !== array[cnt]) {
      repeatCount = 1;
    } else {
      repeatCount += 1;
    }

    if (repeatCount > modeCount) {
      modeCount = repeatCount;
      mode = array[cnt];
    } else if (repeatCount === modeCount) {
      mode = -1;
    }

    beforeNumber = array[cnt];
    cnt = cnt + 1;
  }
  return mode;
}