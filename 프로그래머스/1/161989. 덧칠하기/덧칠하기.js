function solution(n, m, section) {
    let answer = 0
    let possible = 0
    section.forEach(area => {
        if(area > possible){
            answer++
            possible = area+m-1
        }
    })
    
    return answer
}