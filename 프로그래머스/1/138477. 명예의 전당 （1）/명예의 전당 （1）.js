function solution(k, score) {
  const topList = [];
  const answer = [];
  for (let i = 0; i < score.length; i++) {
    if (topList.length === k) {
      if (topList[topList.length - 1] < score[i]) {
        topList[topList.length - 1] = score[i];
        topList.sort((a, b) => b - a);
      }
    } else {
      topList.push(score[i]);
      topList.sort((a, b) => b - a);
    }
    answer.push(topList[topList.length - 1]);
  }

  return answer;
}