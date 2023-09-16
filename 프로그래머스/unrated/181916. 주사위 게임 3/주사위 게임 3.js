function solution(...args) {
    const nums = Array(7).fill(0)
    args.forEach(v => nums[v]++)
    if(nums.filter(v => v).length === 1) return 1111*nums.findIndex(v => v)
    if(nums.filter(v => v).length === 2) {
        if(nums.filter(v => v>2).length){
            const p = nums.findIndex(v => v===3)
            const q = nums.findIndex(v => v===1)  
            return Math.pow(10*p+q,2)
        }
        const p = nums.findIndex(v => v)
        const q = nums.findIndex((v,i) => v && i !== p)      
        return (p+q)*Math.abs(p-q)         
    }
    if(nums.filter(v => v).length === 3) return nums.reduce((acc,v,i) => v===1 && acc!==i ? acc*i : acc,1)
    if(nums.filter(v => v).length === 4) return nums.findIndex(v => v)
}