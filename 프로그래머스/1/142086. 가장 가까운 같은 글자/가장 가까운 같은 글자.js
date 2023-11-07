function solution(s) {
    return [...s].map((v,i) => ((target) => target > -1 ? i - target : -1)(s.substring(0,i).lastIndexOf(v)))
}