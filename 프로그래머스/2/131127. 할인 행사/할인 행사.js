function solution(want, number, discount) {
    var answer = 0;
    
    const map = {}
    for(let i=0;i<want.length;i++){
        map[want[i]] = number[i]
    }
    
    for(let i=0;i<discount.length;i++){
        const arr = discount.slice(i,i+10)
        const possible = {}
        for(let j=0;j<arr.length;j++){
            if(!possible[arr[j]]) possible[arr[j]]=0
            possible[arr[j]]++
        }
        let check = true
        for(const item in map){
            if(map[item] !== possible[item]) {
                check = false
                break
            }
        }
        if(check) answer++
    }
    
    return answer;
}