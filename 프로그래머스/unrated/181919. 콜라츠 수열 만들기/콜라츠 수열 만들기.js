function solution(n) {
    var answer = [n];
    while(answer[answer.length-1] !==1){
        if(answer[answer.length-1]%2) answer.push(3*answer[answer.length-1]+1)
        else answer.push(answer[answer.length-1]/2)
    }
    return answer;
}