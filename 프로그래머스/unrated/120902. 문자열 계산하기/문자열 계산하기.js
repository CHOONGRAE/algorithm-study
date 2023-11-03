function solution(my_string) {
    return my_string.split(' ').reduce((acc,v,i,origin) => !Number.isNaN(+v) ? origin[i-1] === '+' ? +acc + +v : +acc - +v : +acc);
}