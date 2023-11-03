function solution(emergency) {
    return emergency.map(v => emergency.filter(e => e>v).length+1)
}