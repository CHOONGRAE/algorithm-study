function solution(num_list) {
    return num_list.reduce((mul,v) => mul * +v,1) < Math.pow(num_list.reduce((sum,v) => sum + +v,0),2) ? 1 : 0;
}