function solution(n) {
    let answer = 0
    let real = 1
    while(real <= n){
        answer++
        while(!(answer%3) || String(answer).includes('3')) answer++
        real++
    }
    return answer;
}