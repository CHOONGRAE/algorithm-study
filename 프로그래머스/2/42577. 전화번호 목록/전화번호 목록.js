function solution(phone_book) {
    phone_book.sort()
    for(let i=0;i<phone_book.length-1;i++){
        const [c,t] = phone_book.slice(i,i+2)
        if(t.slice(0,c.length) === c) return false
    }
    return true
}