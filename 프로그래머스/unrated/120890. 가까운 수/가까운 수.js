function solution(array, n) {
    return array.reduce(([answer,dist],v) => Math.abs(n-v) < dist ? [v,Math.abs(n-v)] : Math.abs(n-v) === dist && v < answer ? [v,Math.abs(n-v)] : [answer,dist],[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER])[0]
}