function solution(sides) {
    return sides.reduce((flag,cv,ci,arr) => flag && cv < arr.reduce((sum,v,i) => i === ci ? sum : sum+v ,0),true) ? 1 : 2;
}