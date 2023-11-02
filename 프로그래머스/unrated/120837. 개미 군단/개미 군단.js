function solution(hp) {
    return (hp / 5 << 0) + ((hp % 5)/3 << 0) + (hp % 5) % 3
}