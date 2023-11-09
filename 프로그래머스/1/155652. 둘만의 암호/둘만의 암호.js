function solution(s, skip, index) {
    return (cs => [...s].map(c => cs[(cs.indexOf(c) + index) % cs.length]).join(''))([...'abcdefghijklmnopqrstuvwxyz'].filter(c => !skip.includes(c)))
}