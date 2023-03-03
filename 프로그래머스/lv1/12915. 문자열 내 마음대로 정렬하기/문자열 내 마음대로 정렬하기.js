function solution(strings, n) {
    return strings.sort((a,b)=>a[n]===b[n]?a.localeCompare(b):a[n].localeCompare(b[n]))
}

/*
1. 배열을 이중배열로 변환한다.
2. 인덱스 n의 글자를 어디가 더 큰지 비교하여 일차원 배열의 자리를 변경한다.
*/