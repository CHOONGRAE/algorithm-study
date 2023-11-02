function solution(age) {
    const to = [...'abcdefghijklmnopqrstuvwxyz']
    return [...String(age)].map(v => to[v]).join('')
}