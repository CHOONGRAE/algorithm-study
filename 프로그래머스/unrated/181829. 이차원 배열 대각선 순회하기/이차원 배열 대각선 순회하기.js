function solution(board, k) {
    var answer = 0;
    for(let i=0,lenI=Math.min(k+1,board.length);i<lenI;i++){
        for(let j=0,lenJ=Math.min(k+1-i,board[i].length);j<lenJ;j++){
            answer+=board[i][j]
        }
    }
    return answer;
}