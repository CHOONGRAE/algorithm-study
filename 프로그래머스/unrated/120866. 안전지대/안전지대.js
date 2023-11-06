function solution(board) {
    let answer = Math.pow(board.length,2)
    
    for(let y=0,len=board.length;y<len;y++){
        for(let x = 0;x<len;x++){
            if(board[y][x] === 1){
                answer--
                for(let my=-1;my<=1;my++){
                    for(let mx=-1;mx<=1;mx++){
                        if(y+my>=0 && y+my<len && x+mx >=0 && x+mx < len && (my || mx) && !board[y+my][x+mx]){
                            board[y+my][x+mx] = 2
                            answer--
                        }
                    }
                }
            }
        }
    }
    return answer
}