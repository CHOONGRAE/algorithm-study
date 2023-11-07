function solution(lines) {
    let answer = 0;
    for(let i=Math.min(...lines.map(v => v[0]));i<Math.max(...lines.map(v => v[1]));i++){
        if(lines.filter(([start,end]) => start<=i && end>=i+1).length >1) answer++
    }
    return answer;
}