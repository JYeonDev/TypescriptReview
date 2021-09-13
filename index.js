// type alias 변수를 타입에 담아서 사용 가능하다.
// trpe alias 관습
// 파스칼 케이스를 사용한다.
var 동물 = 123;
var 과일 = { name: "kim", age: 20 };
// javascript 에서는 const 를 사용시 오브젝트 자료 수정이 가능하지만 typescript 에서는 자료수정을 막을 수 있다.
// readonly 를 사용시 읽기전용으로 설정하면 수정이 불가능하다. 수정시 에러가 발생한다.
// 하지만, 에디터 & 터미널에서만 typescript  에러가 발생할 뿐 실제 컴파일되는 jsvascript파일에는 정상적으로 컴파일 되서 동작한다.
{
    var 여친 = {
        name: "엠버",
    };
    여친.name = "유라";
    // 같은 이름의 type 변수 재정의 불가능}
// 같은 이름의 type 변수 재정의 불가능
