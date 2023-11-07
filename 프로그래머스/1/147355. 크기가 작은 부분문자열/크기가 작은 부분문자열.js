function solution(t, p) {
    return Array.from({length:t.length-p.length+1},(_,i) => i).reduce((acc,v) => +t.substring(v,v+p.length) <= +p ? acc+1 : acc,0)
}