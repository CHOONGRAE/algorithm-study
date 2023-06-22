function solution(s1, s2) {
    return s1.reduce((result,v) => s2.includes(v) ? ++result : result,0);
}