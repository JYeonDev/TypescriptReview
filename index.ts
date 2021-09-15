// protected private 와 유사하다. class, object안에서만 사용가능하게한다.
// 하지만, protected 는 extends 된 class에서 사용가능하다.

class User {
  protected x = 10;
}

class NewUser extends User {
  dothis() {
    this.x = 20;
  }
}

// static 부모 class에서만 사용가능하도록한다.
// static 은 public, private, protected와 같이 사용이 가능하다.

class User2 {
  public static x = 10;
  y = 20;
}

let 자식 = new User2();
console.log(자식);

// 활용

class User3 {
  static skill = "js";
  intro = User3.skill "전문가입니다";
}

let 철수 = new User3();
console.log(철수);

User3.skill = 'ts';

let 철수2 = new User3();
console.log(철수2)