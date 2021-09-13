// Narrowing  타입이 하나로 정해져 있지 않을 때 사용한다.
// 대표적인 방법 typeof
function 내함수(x) {
    if (typeof x === "string") {
        return x + "1";
    }
    else {
        return x + 1;
    }
}
function 내함수2(x) {
    var array = [];
    if (typeof x === "number") {
        array[0] = x;
    }
}
내함수(123);
// 주의사함!!  if문을 썻으면 끝까지 써야 안전하다. else, else if 안쓰면 에러로 잡아줄 수도
// assertion 문법 (타입 덮어쓰기)
// assertion 문법의 용도
// 1. Narrowing 할 때 사용 (union type을 하나로 확정 지을 때 사용
// 2. 무슨 타입이 들어올지 100% 확실할 때 사용
// 3. 남이 짠 문법을 수정하거나 왜 타입에러가 발생했는지 모르겠을 때 비상용으로 사용
function 내함수3(x) {
    var array = [];
    array[0] = x;
    // x 를 number 타입으로 지정한다.
}
