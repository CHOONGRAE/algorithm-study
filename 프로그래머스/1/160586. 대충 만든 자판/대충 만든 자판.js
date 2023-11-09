function solution(keymap, targets) {
    return (key => targets.map(v => (r => Number.isNaN(r) ? -1 : r)([...v].reduce((acc,c) => acc+key[c],0))))(keymap.reduce((acc,v) => ({...acc,...[...v].reduce((temp,c,i) => ({...temp,[c]: Math.min(temp[c] ?? Number.MAX_SAFE_INTEGER,i+1)}),acc)}),{}))
}