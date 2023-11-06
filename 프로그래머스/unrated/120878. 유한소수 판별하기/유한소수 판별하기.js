function solution(a, b) {
    const gcd = (a,b) => b ? gcd(b,a%b) : a
    
    let curr = b / gcd(a,b)
    let div = 2
    
    while(curr > 1){
        if(!(curr % div)) {
            curr /= div
            if(![2,5].includes(div)) return 2
        } else div++
    }
    
    return 1
}