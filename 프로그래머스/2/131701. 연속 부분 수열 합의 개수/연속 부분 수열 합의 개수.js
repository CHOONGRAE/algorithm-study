function solution(elements) {
    const set = new Set()
    
    for(let i=1;i<=elements.length;i++){
        const arr = [...elements,...elements]
        for(let j=0;j<arr.length-i;j++){
            let sum = 0
            for(let k=j;k<j+i;k++){
                sum+=arr[k]
            }
            set.add(sum)
        }
    }
    
    return set.size
}