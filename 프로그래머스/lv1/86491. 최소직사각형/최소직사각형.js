function solution(sizes) {
    let max1=0, max2=0
    sizes.forEach((a) => a.sort((x,y)=>y-x));
    for(let i=0; i<sizes.length;i++){
        if(sizes[i][0] >max1){
            max1=sizes[i][0];
        }
        if(sizes[i][1] >max2){
            max2=sizes[i][1];
        }
    }
    return max1*max2;
}