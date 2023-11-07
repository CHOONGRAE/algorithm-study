function solution(k, score) {
    return score.map((_,i,o) => Math.min(...o.slice(0,i+1).sort((a,b) => b-a).slice(0,k)))
}