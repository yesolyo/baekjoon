function solution(s) {
    let words=[/zero/gi,/one/gi,/two/gi,/three/gi,/four/gi,/five/gi,/six/gi,/seven/gi,/eight/gi,/nine/gi]
    words.forEach((e,i)=> s = s.replace(e,i));
    return Number(s);}