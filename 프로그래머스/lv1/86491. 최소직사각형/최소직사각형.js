function solution(sizes) {
    let max=[0,0];
    sizes.forEach((a) => a.sort((x,y)=>y-x));
    sizes.forEach(([w,h])=>{
            if(w>max[0]) max[0]=w;
            if(h>max[1]) max[1]=h;
    }
    )
    return max[0]*max[1];
}