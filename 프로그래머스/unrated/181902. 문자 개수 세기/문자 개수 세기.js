function solution(my_string) {
    const index = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz']
    return [...my_string].reduce((acc,v) => {
        acc[index.indexOf(v)]++
        return acc
    },Array(52).fill(0))
}