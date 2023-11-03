const checkPrime = n => {
    if(n === 2 || n === 3) return true
    for(let i=2;i<=Math.ceil(Math.sqrt(n));i++) if(!(n%i)) return false
    return true
}

function solution(n) {
    return Array.from({length:n-1},(_,i) => i+2).filter(v => !(n%v) && checkPrime(v))
}