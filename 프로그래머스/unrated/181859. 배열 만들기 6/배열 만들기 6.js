function solution(arr) {
    const answer = []
    let i=0
    while(i<arr.length){
        if(!answer.length) {
            answer.push(arr[i++])
            continue
        }
        if(answer[answer.length-1] === arr[i]){
            answer.pop()
            i++
            continue
        }
        answer.push(arr[i++])
    }
    return answer.length ? answer : [-1]
}