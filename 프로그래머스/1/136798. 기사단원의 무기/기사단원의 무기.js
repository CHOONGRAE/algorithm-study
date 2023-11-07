function solution(number, limit, power) {
    return Array(number).fill().reduce((acc,_,i) => {
        const divs = new Set()
        for(let j=1;j<=Math.sqrt(i+1);j++){
            if(!((i+1)%j)) {
                divs.add(j)
                divs.add((i+1)/j)
            }
            if(divs.size > limit) return acc+power
        }
        return acc+divs.size
    },0)
}