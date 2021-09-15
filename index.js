var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
function 함수() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a[2]);
}
함수(1, 3, 5, 6, 2, 2);
var arr = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr), arr2);
console.log(arr3);
var _a = ["안녕", 100], 변수1 = _a[0], 변수2 = _a[1];
console.log(변수1);
var _b = { student: true, age: 20 }, student = _b.student, age = _b.age;
function 함수2(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
함수2({ student: true, age: 20 });
