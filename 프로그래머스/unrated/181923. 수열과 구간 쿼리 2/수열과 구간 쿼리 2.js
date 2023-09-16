function solution(arr, queries) {
    return queries.reduce((acc,[s,e,k]) => {
        const result = arr.slice(s,e+1).sort((a,b) => a-b).find(v => v > k)
        acc.push(result > k ? result : -1)
        return acc
    },[])
}