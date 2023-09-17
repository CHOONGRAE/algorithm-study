function solution(myStr) {
    const result = myStr.split(/[abc]/g).filter(v => v)
    return result.length ? result : ['EMPTY']
}