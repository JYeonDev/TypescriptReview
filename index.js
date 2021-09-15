// protected private 와 유사하다. class, object안에서만 사용가능하게한다.
// 하지만, protected 는 extends 된 class에서 사용가능하다.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User() {
        this.x = 10;
    }
    return User;
}());
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewUser.prototype.dothis = function () {
        this.x = 20;
    };
    return NewUser;
}(User));
// static 부모 class에서만 사용가능하도록한다.
// static 은 public, private, protected와 같이 사용이 가능하다.
var User2 = /** @class */ (function () {
    function User2() {
        this.y = 20;
    }
    User2.x = 10;
    return User2;
}());
var 자식 = new User2();
console.log(자식);
// 활용
var User3 = /** @class */ (function () {
    function User3() {
        this.intro = User3.skill;
    }
    User3.skill = "js";
    return User3;
}());
var 철수 = new User3();
console.log(철수);
User3.skill = 'ts';
var 철수2 = new User3();
console.log(철수2);
