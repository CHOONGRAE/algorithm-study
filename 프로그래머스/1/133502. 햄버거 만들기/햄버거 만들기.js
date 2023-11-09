function solution(ingredient) {
    return Array(1_000_000).fill().reduce(([idx,ans]) => ingredient[idx] ? ingredient[idx] === 1 && ingredient[idx-1] === 3 && ingredient[idx-2] === 2 && ingredient[idx-3] === 1 && ingredient.splice(idx-3,4) ? [idx-3,ans+1] : [idx+1,ans] : [idx,ans],[0,0])[1]
}