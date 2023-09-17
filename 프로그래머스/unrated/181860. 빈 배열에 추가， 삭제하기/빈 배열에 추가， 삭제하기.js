function solution(arr, flag) {
    return flag.reduce((acc,v,i) => v ? [...acc,...Array(arr[i]*2).fill(arr[i])] : acc.slice(0,acc.length-arr[i]), [])
}