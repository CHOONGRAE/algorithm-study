function solution(order) {
    return order.reduce((acc,v) => v.includes('cafelatte') ? acc+5000 : acc+4500,0)
}