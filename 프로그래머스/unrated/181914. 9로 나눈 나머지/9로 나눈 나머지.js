function solution(number) {
    return [...number].reduce((acc,v) => acc + +v,0) % 9;
}