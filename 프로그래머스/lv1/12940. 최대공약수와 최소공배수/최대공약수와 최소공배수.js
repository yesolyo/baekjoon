function solution(n, m) {
    let a=n, b=m;
    while(b!=0){
      let r=a%b;
        a=b;
        b=r;  
    }
    return [a,n*m/a];
}