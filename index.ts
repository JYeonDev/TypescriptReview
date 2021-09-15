// public
// 모든 자식들이 이용가능

class User {
  public name = "kim";
  constructor(a) {
    this.name = a;
  }
}

let 유저1 = new User("park");
유저1.name = "안뇽";

// private
// class 안에서만 수정, 이용가능

class User2 {
  name: string;
  private familyName: string = "kim";
  constructor(a) {
    this.name = a + this.familyName;
  }
  이름변경함수() {
    this.familyName = "park";
  }
}
let 유저2 = new User2("park");
console.log(유저2);
유저2.이름변경함수();
console.log(유저2);

class Person {
  constructor(public name: string) {}
}
let 자식 = new Person("김");
console.log(자식);
