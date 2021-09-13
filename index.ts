// type alias에 함수 type 지정하는 법
// 화살표 함수를 사용해야 한다.
type 함수타입 = (a: string) => number;
// number 는 return값을 의미한다.

// 함수타입을 사용하려면 함수표현식을 사용해야한다.
let 함수: 함수타입 = function () {};

// object안에 함수 만들기 (메서드)
let 회원정보 = {
  name: "kim",
  plusOne(a: number): number {
    return a + 1;
  },
  plusTwo: (number) => number,
};

회원정보.plusOne(2);
