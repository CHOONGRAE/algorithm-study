function solution(numbers, k) {
    return numbers[((k*2-1)%numbers.length || numbers.length)-1]
}