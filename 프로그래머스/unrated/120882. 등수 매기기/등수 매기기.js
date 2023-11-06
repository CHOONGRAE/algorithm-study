function solution(score) {
    return (([score,grade]) => score.map(v => grade.indexOf(v)+1))(((score) => [score,[...score].sort((a,b) => b-a)])(score.map(([e,m]) => (e+m)/2)))
}