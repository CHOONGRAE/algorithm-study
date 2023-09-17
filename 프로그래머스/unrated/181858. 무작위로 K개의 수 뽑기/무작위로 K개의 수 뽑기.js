function solution(arr, k) {
    const set = new Set(arr)
    return [...[...set].slice(0,k),...(k-set.size > 0 ? Array(k-set.size).fill(-1) : [])]
}