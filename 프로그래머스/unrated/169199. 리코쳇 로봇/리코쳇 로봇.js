function solution(board) {
    var answer = 0;
    
    board = board.map(v => v.split(''))
    
    const que = []
    const r = board.length
    const c = board[0].length
    const dy = [-1,0,1,0]
    const dx = [0,1,0,-1]
    
    board.forEach((row,y) => row.forEach((col,x) => col === 'R' && que.push([y,x])))
    
    board[que[0][0]][que[0][1]] = 0
    
    while(que.length){
        const cnt = que.length
        
        for(let i=0; i< cnt;i++){
            const [y,x] = que.shift()
            
            for(let j=0;j<4;j++){
                let ny = y+dy[j]
                let nx = x+dx[j]
                
                while(ny >= 0 && ny < r && nx >=0 && nx < c && board[ny][nx] !== 'D'){
                    ny+=dy[j]
                    nx+=dx[j]
                }
                
                ny -= dy[j]
                nx -= dx[j]
                
                if(board[ny][nx] === 'G') return ++answer
                if(board[ny][nx] !== 0){
                    board[ny][nx] = 0
                    que.push([ny,nx])
                }
            }
        }
        
        answer++
    }
    
    return -1;
}