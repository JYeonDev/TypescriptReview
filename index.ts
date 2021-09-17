// tuple type 위치별 타입지정

let 멍멍: [string, number, boolean?] = ["dog", 123, true];

function 함수(...x: [number, string]) {
  console.log(x);
}
함수(111, "222");

let arr = [1, 2, 3];
let arr2: [...number[]] = [4, 5, ...arr];
