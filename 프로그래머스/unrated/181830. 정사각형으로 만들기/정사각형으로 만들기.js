function solution(arr) {
    const row = arr.length
    const col = arr[0].length
    return row === col ? arr : row > col ? arr.map(v => [...v,...Array(row-col).fill(0)]) : [...arr,...Array(col-row).fill(Array(col).fill(0))]
}