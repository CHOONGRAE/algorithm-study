function solution(my_string, m, c) {
    return [...my_string].reduce((acc,v,i) => i%m === c-1 ? acc+v :acc ,'')
}