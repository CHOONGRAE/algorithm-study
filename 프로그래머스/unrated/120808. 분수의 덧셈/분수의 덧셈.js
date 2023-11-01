const getGcd = (a,b) => {
    let r
    while( b!==0 ){
        r = a%b
        a = b
        b = r
    }
    return a
}

const getLcm = (a,b) => {
    return a*b / getGcd(a,b)
}

function solution(numer1, denom1, numer2, denom2) {
    const lcm = getLcm(denom1,denom2)
    const [num,denom] = [numer1*lcm/denom1+numer2*lcm/denom2,lcm]
    const gcd = getGcd(num,denom)
    return [num/gcd,denom/gcd]
}