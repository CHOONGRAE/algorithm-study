function solution(num_list) {
    return num_list.reduce((result,v) => num_list.length>10 ? result+v : result*v);
}