// never
// 조건
// 1. return 값이 없어야한다.
// 2. 함수실행이 끝나지 않아야 한다.(endpoint가 없어야 한다.)
// 3.

function 함수(): never {
  throw new Error();
}

// never 타입 쓰는 법
// 거의 쓸일이 없다.

// never타입이 등장하는 경우
// 1. 뭔가 이상한 narrowing

function 함수2(parameter: string) {
  if (typeof parameter == "string") {
    console.log(parameter);
  } else {
    console.log(parameter);
  }
}

// 2. 어떤 함수표현식은 return 타입이 자동으로 never

let 함수3 = function () {
  throw new Error();
};
