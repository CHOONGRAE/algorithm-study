function solution(numLog) {
    const logToStr = (num) => {
        switch(num){
            case 1: return 'w'
            case -1: return 's'
            case 10: return 'd'
            case -10: return 'a'
            default: return ''
        }
    }
    
    return numLog.reduce((acc,v,i,origin) => origin[i+1] !== null ? acc + logToStr(origin[i+1]-v) : acc,'')
}