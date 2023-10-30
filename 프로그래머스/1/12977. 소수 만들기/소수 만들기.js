function solution(nums) {
  let sum = 0;
  let answer = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let z = j + 1; z < nums.length; z++) {
        sum = nums[i] + nums[j] + nums[z];
        if (isPrime(sum)) {
          answer++;
        }
      }
    }
  }
  return answer;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}