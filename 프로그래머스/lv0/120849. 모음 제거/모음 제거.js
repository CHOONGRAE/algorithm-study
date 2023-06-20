function solution(my_string) {
    return [...my_string].filter(v => ![...'aeiou'].includes(v)).join('');
}