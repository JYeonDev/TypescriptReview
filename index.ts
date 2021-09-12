// js 문법 그대로 ts에서 사용가능

let 이름: string = "kim";
// 변수에 타입지정가능

let 나이: number = 50;
let 결혼: boolean = true;
let 회원들: string[] = ["kim", "park"];
let 사람들: { member1: string; member2: string } = {
  member1: "kim",
  member2: "park",
};

// 예제 1
let info: { name: string; age: number; address: string } = {
  name: "김종연",
  age: 27,
  address: "인천",
};

// 예제2

let favorite: { singer: string; music: string } = {
  singer: "Jenevieve",
  music: "Baby Powder",
};

let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
