function solution(k, tangerine) {
    const map = {}
    tangerine.forEach(v => map[v] ? map[v]++ : (map[v] = 1))
    
    const arr = Object.values(map).sort((a,b) => b-a)
    
    for(let i=0,cnt=0;i<arr.length;i++,cnt){
        cnt+=arr[i]
        if(cnt >= k) return i+1
    }
}