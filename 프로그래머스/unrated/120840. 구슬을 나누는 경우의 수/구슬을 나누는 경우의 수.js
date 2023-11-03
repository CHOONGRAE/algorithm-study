const fact = n => {
    n = BigInt(n)
    let answer = 1n
    while(n > 1n) answer *= n--
    return answer
}

function solution(balls, share) {
    return fact(balls)/fact(balls-share)/fact(share)
}