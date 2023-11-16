function solution(park, routes) {
    
    const yl = park.length
    const xl = park[0].length
    
    let curr
    for(let y=0;y<yl;y++){
        if(curr) break
        for(let x=0;x<xl;x++){
            if(park[y][x] === 'S') {
                curr = [y,x]
                break;
            }
        }
    }    
    
    const dy = {'E':0,'W':0,'S':1,'N':-1}
    const dx = {'E':1,'W':-1,'S':0,'N':0}
    
    while(routes.length){
        let [d,c] = routes.shift().split(' ')
        const temp = [...curr]
        while(+c > 0){
            c = +c-1
            const [ny,nx] = [curr[0]+dy[d],curr[1]+dx[d]]
            if(ny<0||ny>=yl||nx<0||nx>=xl||park[ny][nx]=='X'){
                curr = temp
                break
            }
            curr = [ny,nx]
        }
    }
    
    return curr
}