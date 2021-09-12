// 함수의 파라미터 타입지정 가능  리턴값은 파라미터 다음에 지정
function 함수(x) {
    return x * 2;
}
함수(20);
// void는 return을 하지않도록 막는다.
function 함수2(x) {
    1 + 1;
}
// 타입스크립트에서는 지정된 파라미터 입력이 필수이다.
// ? 를 사용하면 파라미터를 받을 수도 있고 안 받을수도 있게 설정가능하다.
// ? 는 아무타입 | undefined 와 같다.
// 오브젝트에서도 마찬가지로 key에 사용가능
함수(2);
// 예제 1
function hi(hello) {
    if (hello) {
        console.log("안녕" + hello);
    }
    else {
        console.log("이름이 없습니다.");
    }
}
hi("김종연");
// 예제 2
function machine(n) {
    return n.toString().length;
}
machine(234);
// 예제 3
function 결혼가능하냐(money, house, charm) {
    var score = 0;
    score += money;
    if (house === true) {
        score += 500;
    }
    if (charm === "상") {
        score += 100;
    }
    if (score >= 600) {
        return "결혼가능";
    }
}
console.log(결혼가능하냐(100, true, "상"));
