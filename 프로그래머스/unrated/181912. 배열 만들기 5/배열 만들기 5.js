function solution(intStrs, k, s, l) {
    return intStrs.reduce((acc,v) => [...acc,Number(v.substring(s,s+l))].filter(v => v>k),[])
}