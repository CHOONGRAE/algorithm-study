function solution(number) {
    let answer = 0;
    
    const comb = (index,dep,result) => {
        if(dep === 3){
            if(result === 0) answer++
            return
        }
        
        for(let i=index;i<number.length;i++){
            comb(i+1,dep+1,result+number[i])
        }
    }
    
    comb(0,0,0,[],[])
    
    return answer;
}