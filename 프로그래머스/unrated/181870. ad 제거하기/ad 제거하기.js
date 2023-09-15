function solution(strArr) {
    return strArr.filter(v => !/ad/.test(v));
}