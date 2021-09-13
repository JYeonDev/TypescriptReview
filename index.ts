// Literal types 지정한 값만 들어오게 하여 사용할 수 있다.
// union 으로도 지정 가능
let 이름: 123;
let 접니다: "대머리" | "솔로";

// 함수에서 파라미터의 값을 지정가능하다.
// return 값도 지정가능
function 함수(a: "hello"): 1 | 0 {
  return 1;
}

function 가위바위보(x: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위"];
}

가위바위보("가위");

// Literal type의 문제점
let 자료 = {
  name: "kim",
} as const;

function 내함수(a: "kim") {}
// 자료.name은 타입이 string이지만 a: 'kim'은 타입이 'kim'이다
내함수(자료.name);

// 해결법 object 만들 때 타입지정 확실히
// as 문법 사용
// as const 사용 1. object value 값을 그대로 타입으로 지정해줌 2. 모든 속성들을 readonly로 바꿔준다
