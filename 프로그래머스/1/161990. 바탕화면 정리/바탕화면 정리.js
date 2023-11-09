function solution(wallpaper) {
    return wallpaper.reduce(([luy,lux,rdy,rdx],v,i) => v.includes('#') ? [Math.min(luy,i),Math.min(lux,v.indexOf('#')),Math.max(rdy,i+1),Math.max(rdx,v.lastIndexOf('#')+1)] : [luy,lux,rdy,rdx], [50,50,0,0])
}