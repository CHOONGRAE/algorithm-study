function solution(numbers) {
    var answer = 0;
    for(let i=0;i<numbers.length;i++){
        for(let j=i+1;j<numbers.length;j++){
            const temp = numbers[i]*numbers[j]
            if(temp > answer) answer = temp
        }
    }
    return answer;
}