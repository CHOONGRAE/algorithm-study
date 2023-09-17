function solution(arr) {
    console.log(arr.length.toString(2))
    return [...arr,...Array(arr.length-1 & arr.length && parseInt('1'+'0'.repeat(arr.length.toString(2).length),2)-arr.length).fill(0)];
}