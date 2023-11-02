function solution(n) {
    let i = 1
    let fact = 1
    while(true){
        i++
        fact*=i
        if(fact > n) return --i
    }
}