function solution(A, B) {
    let answer = 0;
    let cnt = 0
    let curr = A
    while(cnt <= A.length){
        if(curr === B) break
        cnt++
        answer++
        curr = curr[curr.length-1]+curr.substring(0,curr.length-1)
    }
    return cnt > A.length ? -1 : answer;
}