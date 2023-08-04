function solution(todo_list, finished) {
    return finished.reduce((acc,v,i) => v ? acc : acc.concat(todo_list[i]),[]);
}