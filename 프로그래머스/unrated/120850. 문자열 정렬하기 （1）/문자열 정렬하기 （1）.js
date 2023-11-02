function solution(my_string) {
    return [...my_string].reduce((acc,v) => Number.isNaN(Number(v)) ? acc : [...acc,+v], []).sort((a,b) => a-b)
}