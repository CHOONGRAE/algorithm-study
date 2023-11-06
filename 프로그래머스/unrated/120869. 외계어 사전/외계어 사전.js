function solution(spell, dic) {
    return dic.filter(v => spell.reduce((acc,c) => v.includes(c) && acc,true)).length ? 1 : 2
}