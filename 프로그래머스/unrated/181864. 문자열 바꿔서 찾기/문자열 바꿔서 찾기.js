function solution(myString, pat) {
    return [...myString].map(v => v === 'A' ? 'B' : v=== 'B' ? 'A' :v).join('').includes(pat) ? 1 : 0;
}