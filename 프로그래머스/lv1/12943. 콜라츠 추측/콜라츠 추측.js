function solution(num,count=0) {
  while(num > 1){
    if(num % 2 === 0){
      num = parseInt(num / 2)
    }else{
      num = num * 3 + 1
    }
    count+=1;
  }
  return count>500?-1:count;
}