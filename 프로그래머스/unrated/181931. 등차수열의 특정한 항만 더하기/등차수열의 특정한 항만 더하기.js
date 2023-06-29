function solution(a, d, included) {
    return [...included].reduce((result,v,i) => v ? result+a+d*i : result,0);
}