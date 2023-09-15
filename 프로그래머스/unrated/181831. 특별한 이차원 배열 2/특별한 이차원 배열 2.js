function solution(arr) {
    for(let y=0,ly=arr.length;y<ly;y++){
        for(let x=0,lx=Math.sqrt(arr.length);x<lx;x++){
            if(arr[y][x] !== arr[x][y]) return 0
        }
    }
    return 1
}