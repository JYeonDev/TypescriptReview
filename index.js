// union type 타입 여러개 지정가능
var 회원 = 123;
회원 = "김종연";
var 회원들 = [1, 2, 3];
var 오브젝트 = { a: "123" };
// any는 어떠한 타입도 들어올수 있다.
// any를 남발하면 타입스크립트를 사용하는 의미가 없다.
// any는 타입을 벗겨내는 용도로 사용한다.
var 이름;
이름 = 123;
이름 = true;
// any와 기능이 동일하다.
// any보다 안전하다.
// any보다 엄격하다
// unknown은 연산자 사용불가
var 성함;
성함 = 123;
성함 = {};
성함 - 1;
// union type은 새로운 타입이다.
// string 타입 + 1 가능
// number 타입 + 1 가능
// string | number + 1 불가능
// 예제 1
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
// 예제2
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
