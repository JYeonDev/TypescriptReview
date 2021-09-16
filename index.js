// Generic 함수
// 파라미터로 타입을 입혁하는 함수
function 함수(x) {
    return x[0];
}
var a = 함수([4, 2]);
var b = 함수(["4", "2"]);
console.log(a);
// extends 를 사용하면 타입이 맞는지 체크 할수 있다.
function 함수2(x) {
    return x - 1;
}
var a = 함수(100);
