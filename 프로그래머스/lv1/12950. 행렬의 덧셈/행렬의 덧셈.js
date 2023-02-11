function solution(arr1, arr2) {
    return arr1.map((a,i)=>a.map((b,j)=>b+arr2[i][j]));
}

//1. 각 자릿 수에 있는 값을 arr1에 더한다. 