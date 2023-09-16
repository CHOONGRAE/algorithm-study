function solution(arr, queries) {
    return queries.reduce((acc,[s,e,k]) => acc.map((v,i) => (i>=s && i<=e && !(i%k)) ? v+1 : v), arr)
}