function solution(my_string) {
    return [...my_string].reduce((acc,v) => Number(v) ? acc+ +v : acc,0)
}