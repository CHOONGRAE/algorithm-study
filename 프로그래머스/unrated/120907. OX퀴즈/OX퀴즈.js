function solution(quiz) {
    return quiz.map(v => v.split(' ')).map(([num1,oper,num2,_,result]) => (oper === '+' ? +num1 + +num2 : +num1 - +num2) === +result ? 'O' : 'X')
}