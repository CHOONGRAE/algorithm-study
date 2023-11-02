function solution(before, after) {
    return [...new Set(before)].reduce((acc,v) => (before.match(new RegExp(v,'g'))?.length === after.match(new RegExp(v,'g'))?.length ? 1 : 0)&acc,1)
}