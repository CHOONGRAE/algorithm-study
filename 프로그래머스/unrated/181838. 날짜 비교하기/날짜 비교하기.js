const dateToStr = ([y,m,d]) => y.toString().padStart(4,'0')+m.toString().padStart(2,'0')+d.toString().padStart(2,'0')

function solution(date1, date2) {
    return dateToStr(date1) < dateToStr(date2) ? 1 : 0
}