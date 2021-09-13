// number 는 return값을 의미한다.
// 함수타입을 사용하려면 함수표현식을 사용해야한다.
var 함수 = function () { };
// object안에 함수 만들기 (메서드)
var 회원정보 = {
    name: "kim",
    plusOne: function (a) {
        return a + 1;
    },
    plusTwo: function (number) { return number; },
};
회원정보.plusOne(2);
