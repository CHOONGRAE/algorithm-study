function solution(arr) {
    return arr.reduce((result,v) => [...result,...Array(v).fill(v)],[]);
}