function solution(n) {
    return Array.from({length:Math.sqrt(n) << 0},(_,i) => i+1).reduce((result,v) => !(n%v) ? Math.pow(n/v,2) === n ? result+1: result+2 :result,0);
}