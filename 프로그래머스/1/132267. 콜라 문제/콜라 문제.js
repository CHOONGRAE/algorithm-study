function solution(a, b, n, r=0) {
    if(n<a) return r
    return solution(a,b,~~(n/a)*b+n%a,~~(n/a)*b+r)
}