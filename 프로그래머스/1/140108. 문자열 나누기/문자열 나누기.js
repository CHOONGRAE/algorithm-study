function solution(s) {
    return (r => r[3] + (r[0] ? 1 : 0))([...s].reduce(([t,s,n,a],v) => t ? s + (v === t ? 1 : 0) === n + (v !== t ? 1 : 0) ? ['',0,0,a+1] : [t, s + (v === t ? 1 : 0), n + (v !== t ? 1 : 0), a] : [v,1,0,a], ['',0,0,0]))
}