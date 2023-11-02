function solution(box, n) {
    return box.reduce((acc,v) => acc*(~~(v/n)),1)
}