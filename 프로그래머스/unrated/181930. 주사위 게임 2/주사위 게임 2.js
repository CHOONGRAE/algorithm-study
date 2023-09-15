function solution(a, b, c) {
    const sum = a+b+c
    const pow = Math.pow(a,2)+Math.pow(b,2)+Math.pow(c,2)
    const pow3 = Math.pow(a,3)+Math.pow(b,3)+Math.pow(c,3)
    
    return a===b&&a===c ? sum*pow*pow3 : a!==b && a!==c && b!==c ? sum : sum*pow
}