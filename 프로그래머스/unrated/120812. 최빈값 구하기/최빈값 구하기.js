function solution(array) {
    let cnt = 0
    let answer = []
    const map = new Map()
    
    array.forEach(v => {
        if(!map[v]) map[v] = 0
        map[v]++
        if(map[v] > cnt) {
            answer = [v]
            cnt = map[v]
        }
        else if(map[v] === cnt){
            answer = [...answer,v]
        }
    })
    
    return answer.length > 1 ? -1 : answer[0]
}