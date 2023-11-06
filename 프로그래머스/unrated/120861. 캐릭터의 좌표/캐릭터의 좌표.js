function solution(keyinput, board) {
    return (([limitX,limitY]) => keyinput.reduce(([x,y],k) => (([currX,currY]) => [currX < -limitX ? -limitX : currX > limitX ? limitX : currX,currY < -limitY ? -limitY : currY > limitY ? limitY : currY])(k === 'up' ? [x,y+1] : k === 'down' ? [x,y-1] : k === 'left' ? [x-1,y] : [x+1,y]),[0,0]))(board.map(v => ~~(v/2)))
}