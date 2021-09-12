// union type 타입 여러개 지정가능

let 회원: number | string = 123;
회원 = "김종연";

let 회원들: (number | string)[] = [1, 2, 3];

let 오브젝트: { a: string | number } = { a: "123" };

// any는 어떠한 타입도 들어올수 있다.
// any를 남발하면 타입스크립트를 사용하는 의미가 없다.
// any는 타입을 벗겨내는 용도로 사용한다.
let 이름: any;
이름 = 123;
이름 = true;

// any와 기능이 동일하다.
// any보다 안전하다.
// any보다 엄격하다
// unknown은 연산자 사용불가
let 성함: unknown;
성함 = 123;
성함 = {};
성함 - 1;

// union type은 새로운 타입이다.
// string 타입 + 1 가능
// number 타입 + 1 가능
// string | number + 1 불가능

// 예제 1
let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | number | boolean | undefined)[] = [user, age, married];

// 예제2
let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
