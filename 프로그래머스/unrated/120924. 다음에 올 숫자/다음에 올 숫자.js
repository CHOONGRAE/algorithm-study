function solution(common) {
    const [a1,a2,a3,...rest] = common
    return a3-a2 === a2-a1 ? common[common.length-1] + (a3 - a2) : common[common.length-1]*(a3/a2)
}