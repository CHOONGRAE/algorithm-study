function solution(num_list) {
    return Math.max(...num_list.reduce(([odd,even],v,i) => i%2 ? [odd+v,even]:[odd,even+v] ,[0,0]));
}