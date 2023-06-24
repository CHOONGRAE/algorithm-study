function solution(str1, str2) {
    return Array.from({length:Math.max(str1.length,str2.length)},(_,i) => str1[i]+str2[i]).join('');
}