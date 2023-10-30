function solution(cards1, cards2, goal) {
  for (let i = 0; i < goal.length; i++) {
    let firstCard1 = cards1[0];
    let secondCard2 = cards2[0];
    if (firstCard1 === goal[i]) {
      cards1.shift();
    } else if (secondCard2 === goal[i]) {
      cards2.shift();
    } else return "No";
  }
  return "Yes";
}