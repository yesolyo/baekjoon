function solution(arr)
{
    return arr.filter((val, index)=> val != arr[index+1]);
}
//1. 숫자가 바뀔때 숫자는 저장된다.