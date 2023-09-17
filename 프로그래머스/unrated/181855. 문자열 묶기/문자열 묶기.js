function solution(strArr) {
    return Math.max(...strArr.reduce((acc,v) => {
        acc[v.length] ? acc[v.length]++ : (acc[v.length] = 1)
        return acc
    },[]).filter(v => v))
}