function solution(s) {
    return s.substring(Math.ceil(s.length/2)-1,s.length%2===1?Math.ceil(s.length/2):Math.ceil(s.length/2)+1);}
//1. s의 길이를 나눈다.
//2. s의 길이가 홀수면 index값 한글자를 반영하고, 아니면 두글자를 반영한다.