function solution(numbers) {
    let answer = Number.MIN_SAFE_INTEGER
    for(let i=0;i<numbers.length;i++){
        for(let j=i+1;j<numbers.length;j++){
            const temp = numbers[i]*numbers[j]
            if(temp > answer) answer = temp
        }
    }
    return answer
}