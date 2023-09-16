function solution(l, r) {
    const result = Array.from({length:r-l+1},(_,i) => i+l).filter(v => !v.toString().replace(/[05]/g,''))
    return result.length ? result : [-1]
}