function solution(s){
    let result = ''
    result =s.toLowerCase()
    return result.split("p").length === result.split("y").length;
}

//1. 문자열 s에서 p의 개수 구하기
//2. 문자열 s에서 y의 개수 구하기
//3. p=y -> true
//4. p != y ->false
//5. p와 y가 존재하지 않는 경우 true