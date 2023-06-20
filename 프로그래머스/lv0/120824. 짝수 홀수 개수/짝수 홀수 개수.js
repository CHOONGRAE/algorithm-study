function solution(num_list) {
    return num_list.reduce(([even,odd],v) => v % 2 ? [even,++odd]:[++even,odd],[0,0]);
}