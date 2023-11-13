function solution(today, terms, privacies) {
    const [y,m,d] = today.split('.')
    terms = terms.reduce((acc,v) => {const [k,t]=v.split(' ');acc[k]=new Date(y,+m-1-t,d);return acc},{})
    return privacies.reduce((acc,v,i) => (([d,k]) => new Date(d) <= terms[k])(v.split(' ')) ? [...acc,i+1]: acc,[])
}