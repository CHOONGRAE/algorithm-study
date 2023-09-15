function solution(my_string) {
    var answer = [];
    for(let i=0,len=my_string.length;i<len;i++){
        answer.push(my_string.substring(i))
    }
    return answer.sort();
}