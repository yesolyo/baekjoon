function solution(food) {
    const result = []
    for(let i=1; i<food.length; i++){
        if(food[i] >=2){
                result.push(`${i}`.repeat(Math.floor(food[i]/2)));
        }

    }
    return result.join('')+0+result.reverse().join('');
}

/*1. 각 음식은 2 이상일때 수를 나눈다.
2. 각 음식이 2 이상이 아닐때는 패스한다.*/
