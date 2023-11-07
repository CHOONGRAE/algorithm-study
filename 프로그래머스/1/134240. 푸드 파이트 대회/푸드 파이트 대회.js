function solution(food) {
    return ((a) => `${a}0${[...a].reverse().join('')}`)(food.slice(1).reduce((acc,v,i) => acc+String(i+1).repeat(~~(v/2)),''))
}