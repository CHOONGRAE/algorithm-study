function solution(dots) {
    return dots.reduce(([[minX,maxX],[minY,maxY]],[x,y]) => [[Math.min(minX,x),Math.max(maxX,x)],[Math.min(minY,y),Math.max(maxY,y)]],[[256,-256],[256,-256]]).map(([min,max]) => max-min).reduce((acc,v) => acc*v)
}