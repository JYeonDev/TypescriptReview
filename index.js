var Person = /** @class */ (function () {
    function Person(a) {
        this.name = a;
    }
    Person.prototype.함수 = function (a) {
        console.log(a);
    };
    return Person;
}());
var 사람1 = new Person("kim");
var 사람2 = new Person("jong");
