const findIsland = (maps,y,x,answer,visit) => {
    const dy = [-1,0,1,0]
    const dx = [0,1,0,-1]
    
    if(maps[y][x] === 'X') return
    if(!visit[y][x]) answer[answer.length-1]+= +maps[y][x]
    visit[y][x] = true
    for(let i=0;i<4;i++){
        const nextY = y+dy[i]
        const nextX = x+dx[i]
        if(nextY >=0 && nextY < visit.length && nextX >=0 && nextX < visit[nextY].length && !visit[nextY][nextX]) findIsland(maps,nextY,nextX,answer,visit)
    }
}

function solution(maps) {
    if(maps.every(v => /^x+$/i.test(v))) return [-1]
    
    const answer = []
    
    const visit = Array.from({length:maps.length},(_,i) => Array(maps[i].length).fill(false))
    
    for(let y=0;y<maps.length;y++){
        for(let x=0;x<maps[y].length;x++){
            if(visit[y][x]) continue
            
            visit[y][x] = true
            
            if(maps[y][x] !== 'X'){
                answer.push(+maps[y][x])
                findIsland(maps,y,x,answer,visit)
            }
        }
    }
    
    return answer.sort((a,b) => a-b)    
}