function solution(s) {
    return s.split(' ').reduce((acc,v,i,origin) => (v === 'Z' || origin[i+1] === 'Z') ? acc : acc + +v,0)
}