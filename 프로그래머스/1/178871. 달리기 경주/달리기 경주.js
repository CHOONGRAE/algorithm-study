function solution(players, callings) {
    const player = {}
    const rank = {}
    players.forEach((v,i) => {
        player[v] = i+1
        rank[i+1] = v
    })
    
    callings.forEach(v => {
        const op = rank[player[v]-1]
        rank[player[v]] = op
        rank[player[op]] = v
        player[op]+=1
        player[v]-=1
    })
    
    return Object.values(rank)
}