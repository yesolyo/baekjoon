function solution(x) {
  let n = x;
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = parseInt(n / 10);
  }
  return x % sum === 0 ;
}