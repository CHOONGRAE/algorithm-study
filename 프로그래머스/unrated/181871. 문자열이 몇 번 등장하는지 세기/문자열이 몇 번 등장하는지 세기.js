function solution(myString, pat) {
    let answer = 0
    for(let i=myString.indexOf(pat); i<=myString.length-pat.length && i > -1;i){
        answer++
        i = myString.indexOf(pat,i+1)
    }
    return answer
}