function solution(myString, pat) {
    return [...[...myString].reverse().join('').substring([...myString].reverse().join('').indexOf([...pat].reverse().join('')))].reverse().join('')
}