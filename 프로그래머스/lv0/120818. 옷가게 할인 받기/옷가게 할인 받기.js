function solution(price) {
    return price >= 500000 ? price*0.8 << 0 : price >=300000 ? price * 0.9 << 0 : price >=100000 ? price*0.95 <<0 : price;
}