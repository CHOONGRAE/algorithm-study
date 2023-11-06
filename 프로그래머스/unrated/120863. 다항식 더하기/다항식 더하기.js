function solution(polynomial) {
    return (([x,n]) => x && n ? `${x === 1 ? '' : x}x + ${n}` : x ? `${x === 1 ? '' : x}x` : `${n}`)(polynomial.split(' + ').reduce(([x,n],v) => v.includes('x') ? [x + +(v.replace('x','') || '1'), n] : [x, n + +v], [0,0]))
}