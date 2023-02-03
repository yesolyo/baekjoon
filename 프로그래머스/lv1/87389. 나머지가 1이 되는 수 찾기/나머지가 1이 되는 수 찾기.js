function solution(n) {
  let i = 0;
  while (i < n) {
    i++;
    if (n % i === 1) {
      return i;
    }
  }
}