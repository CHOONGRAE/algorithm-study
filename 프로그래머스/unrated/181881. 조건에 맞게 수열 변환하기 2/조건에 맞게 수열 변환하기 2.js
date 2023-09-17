function solution(arr) {
    var answer = 0;
    while(arr.find(v => (v>=50 && !(v%2)) || (v<50 && v%2))){
        answer++
        arr = arr.map(v => {
            if(v>=50 && !(v%2)) return v/2
            if(v<50 && v%2) return v*2+1
        })
    }
    return answer;
}