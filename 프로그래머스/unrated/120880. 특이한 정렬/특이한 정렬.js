function solution(numlist, n) {
    numlist.sort((a,b) => ((d1,d2) => d1===d2?b-a:d1-d2)(Math.abs(a-n),Math.abs(b-n)))
    return numlist
}