function solution(k, m, score) {
    return score.sort((a,b) => b-a).map((v,i) => !(i%m) && score.slice(i,i+m)).reduce((acc,v) => v && v.length === m ? acc + Math.min(...v) * m: acc,0)
}