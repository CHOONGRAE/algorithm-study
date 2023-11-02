const checker = n => {
    for(let i=2;i<n;i++){
        if(!(n%i)) return true
    }
    return false
}

function solution(n) {
    return Array.from({length:n},(_,i) => i+1).filter(checker).length
}