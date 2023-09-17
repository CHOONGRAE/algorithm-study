function solution(arr, queries) {
    return queries.reduce((acc,[s,e]) => acc.map((v,i) => i>=s && i<=e ? v+1 : v),arr)
}