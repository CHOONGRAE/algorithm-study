function solution(name, yearning, photo) {
    return photo.map(v => v.reduce((acc,v) => acc + (yearning[name.indexOf(v)] || 0),0))
}