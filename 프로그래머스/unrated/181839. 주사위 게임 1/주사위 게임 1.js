function solution(a, b) {
    return a%2 ? b%2 ? Math.pow(a,2)+Math.pow(b,2) : 2*(a+b) : b%2 ? 2*(a+b) : Math.abs(a-b);
}