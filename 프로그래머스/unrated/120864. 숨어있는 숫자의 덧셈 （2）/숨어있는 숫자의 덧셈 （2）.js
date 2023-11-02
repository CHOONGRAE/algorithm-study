function solution(my_string) {
    return my_string.split(/[A-z]+/g).reduce((acc,v) => v ? acc + +v : acc ,0)
}