function solution(arr) {
    return arr.map(v => v%2 ? v < 50 ? v*2 : v : v >=50 ? v/2 : v);
}