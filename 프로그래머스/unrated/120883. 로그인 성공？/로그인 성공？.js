function solution(id_pw, db) {
    return ((data) => !data ? 'fail' : data === id_pw[1] ? 'login' : 'wrong pw')(db.reduce((acc,[id,pw]) => ({...acc,[id]:pw}),{})[id_pw[0]])
}