function solution(num_list) {
    return num_list.reduce((acc,v) => {
        while(v > 1){
            v = ~~(v/2)
            acc++
        }
        return acc
    }, 0)
}