function solution(arr1, arr2) {
    const check = num => num > 0 ? 1 : num < 0 ? -1 :0
    return check(arr1.length !== arr2.length ? arr1.length - arr2.length : arr1.reduce((acc,v) => acc+v) - arr2.reduce((acc,v) => acc+v)) ;
}