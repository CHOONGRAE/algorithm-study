function solution(n) {
    var answer = 0;
    for(let i=1;i<=n;i++){
        if(!(i%2)) answer+=i
    }
    return answer;
}