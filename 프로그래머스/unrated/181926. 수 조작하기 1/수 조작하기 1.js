function solution(n, control) {
    return [...control].reduce((result,v) => result+[1,-1,10,-10][[...'wsda'].indexOf(v)],n);
}