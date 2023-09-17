function solution(arr, query) {
    return query.reduce((acc,v,i) => i%2 ? acc.slice(v) : acc.slice(0,v+1),arr)
}