function solution(chicken,s = 0) {
    return chicken < 10 ? s : solution(~~(chicken/10)+chicken%10,~~(chicken/10)+s)
}