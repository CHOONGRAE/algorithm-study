function solution(X, Y) {    
    return (result => result.length ? +result[0] ? result : '0'  : '-1')((X => [...Y].sort((a,b) => b-a).reduce((acc,v) => acc + (X[v]-- > 0 ? v : ''),''))([...X].reduce((acc,v) => ({...acc, [v]:(acc[v] ?? 0) + 1}),{})))
}