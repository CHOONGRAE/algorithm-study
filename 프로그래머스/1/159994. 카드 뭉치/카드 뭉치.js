function solution(cards1, cards2, goal) {
    return goal.reduce(([c1,c2,flag],v) =>  cards1[c1] === v ? [c1+1,c2,flag&true] : cards2[c2] === v ? [c1,c2+1,flag&true] : [c1,c2,false],[0,0,true])[2] ? 'Yes' : 'No'
}