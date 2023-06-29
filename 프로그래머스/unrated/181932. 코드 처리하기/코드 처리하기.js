function solution(code) {
    return [...code].reduce(([mode,result],v,i) => v==1 ? [!mode,result] : [mode,result+(i%2==mode ? v : '')],[0,''])[1] || 'EMPTY';
}