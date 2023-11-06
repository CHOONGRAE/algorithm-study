function solution(sides) {
    return Array.from({length:sides[0]+sides[1]-1},(_,i) => i+1).reduce((acc,v) => {const arr = [...sides,v];arr.sort((a,b) => a-b);const [a,b,c]=arr;return a+b > c ? acc+1 : acc},0)
}