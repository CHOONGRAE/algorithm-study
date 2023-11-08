function solution(babbling) {
    return babbling.filter(v => !/(aya){2,}|(ye){2,}|(woo){2,}|(ma){2,}/g.test(v) && !v.replace(/aya|ye|woo|ma/g,'').length).length
}