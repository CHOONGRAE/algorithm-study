function solution(dots) {
    for(let i=0;i<4;i++){
        for(let j=i+1;j<4;j++){
            const temp = dots.slice()
            const [[x1,y1]] = temp.splice(j,1)
            const [[x2,y2]] = temp.splice(i,1)
            const [[x3,y3],[x4,y4]] = temp
            if((y2-y1)/(x2-x1) === (y4-y3)/(x4-x3)) return 1
        }
    }
    return 0;
}