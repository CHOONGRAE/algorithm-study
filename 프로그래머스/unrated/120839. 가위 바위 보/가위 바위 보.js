function solution(rsp) {
    const kind = [2,0,5]
    return [...rsp].map(v => kind[(kind.indexOf(+v)+1)%3]).join('')
}