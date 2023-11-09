function solution(today, terms, privacies) {
    return ((t) => privacies.reduce((acc,v,i) => new Date(v.slice(0,10)) <= t[v[11]] ? [...acc, i+1] : acc, []))((([y,m,d]) => terms.reduce((acc,v) => ({...acc,[v[0]]: new Date(y, m- +v.split(' ')[1] -1,d)}),{}))(today.split('.')))
}