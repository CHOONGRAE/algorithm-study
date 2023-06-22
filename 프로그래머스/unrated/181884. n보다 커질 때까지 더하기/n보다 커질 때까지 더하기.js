function solution(numbers, n) {
    return numbers.reduce((result,v) => result <=n ? result+v:result,0);
}