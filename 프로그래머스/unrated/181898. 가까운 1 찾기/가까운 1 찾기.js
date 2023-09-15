function solution(arr, idx) {
    for(let i=idx,len=arr.length;i<len;i++){
        if(arr[i]===1) return i
    }
    return -1
}