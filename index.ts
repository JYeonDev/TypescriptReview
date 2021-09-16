// Generic 함수
// 파라미터로 타입을 입혁하는 함수

function 함수<Type>(x: Type[]): Type {
  return x[0];
}

let a = 함수<number>([4, 2]);
let b = 함수<string>(["4", "2"]);
console.log(a);

// extends 를 사용하면 타입이 맞는지 체크 할수 있다.
function 함수2<Type extends number>(x: Type) {
  return x - 1;
}

let a = 함수<number>(100);
