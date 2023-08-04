function solution(my_strings, parts) {
    return my_strings.reduce((acc,v,i) => acc+v.substring(parts[i][0],parts[i][1]+1),'');
}