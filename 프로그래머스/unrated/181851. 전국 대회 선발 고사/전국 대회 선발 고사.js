function solution(rank, attendance) {
    return rank.map((v,i) => [v,attendance[i],i],).sort((a,b) => {
        if(a[1] === b[1]) return a[0] - b[0]
        return b[1] - a[1]
    }).slice(0,3).reduce((acc,v,i) => acc+v[2]*Math.pow(10,(2-i)*2),0)
}