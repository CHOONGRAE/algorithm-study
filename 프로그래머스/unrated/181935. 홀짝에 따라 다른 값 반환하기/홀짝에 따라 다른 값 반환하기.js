function solution(n) {
    return Array.from({length:n},(_,i) => i+1).reduce((sum,v) => n%2 ? v%2 ? sum+v : sum : v%2 ? sum : sum+Math.pow(v,2),0);
}