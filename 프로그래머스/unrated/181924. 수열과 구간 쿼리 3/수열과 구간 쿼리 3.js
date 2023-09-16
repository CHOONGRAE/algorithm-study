function solution(arr, queries) {
    return queries.reduce((acc,[a,b]) => {
        const temp = acc[a]
        acc[a] = acc[b]
        acc[b] = temp
        return acc
    }, arr)
}