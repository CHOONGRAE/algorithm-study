function solution(num_list) {
    return [...num_list,num_list.slice(-2).reduce((acc,v) => v > acc ? v - acc : v * 2)];
}