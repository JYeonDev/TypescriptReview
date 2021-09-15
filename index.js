// public
// 모든 자식들이 이용가능
var User = /** @class */ (function () {
    function User(a) {
        this.name = "kim";
        this.name = a;
    }
    return User;
}());
var 유저1 = new User("park");
유저1.name = "안뇽";
// private
// class 안에서만 수정, 이용가능
var User2 = /** @class */ (function () {
    function User2(a) {
        this.familyName = "kim";
        this.name = a + this.familyName;
    }
    User2.prototype.이름변경함수 = function () {
        this.familyName = "park";
    };
    return User2;
}());
var 유저2 = new User2("park");
console.log(유저2);
유저2.이름변경함수();
console.log(유저2);
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var 자식 = new Person("김");
console.log(자식);
