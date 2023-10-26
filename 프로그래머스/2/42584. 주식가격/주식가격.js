function solution(prices) {

  const countList = new Array(prices.length).fill(0);
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] <= prices[j]) {
        countList[i]++;
      } else {
          countList[i]++;
        break;
      }
    }

  }
  return countList;
 
}