function solution(picture, k) {
    return picture.reduce((acc,v) => [...acc,...Array(k).fill([...v].reduce((acc2,v2) => acc2+v2.repeat(k),''))],[])
}