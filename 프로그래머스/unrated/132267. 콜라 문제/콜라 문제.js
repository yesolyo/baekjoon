function solution(a, b, n) {
    let total=0;
    while (n>=a){
        total+=Math.floor(n/a)*b;
        n= Math.floor(n/a)*b+n%a;
    }
    return total;
}