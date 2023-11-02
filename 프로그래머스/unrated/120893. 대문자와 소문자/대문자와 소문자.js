function solution(my_string) {
    return [...my_string].reduce((acc,v) => acc + (v.charCodeAt(0) < 97 ? v.toLowerCase() : v.toUpperCase()),'')
}