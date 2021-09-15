interface Square {
  color: string;
  width: number;
}

let 네모: Square = { color: "red", width: 100 };

interface Student {
  name: string;
}

interface Teacher extends Student {
  age: number;
}

let 학생: Student = { name: "kim" };
let 선생: Teacher = { name: "kim", age: 20 };

type Animal = { name: string };
type Cat = { age: number } & Animal;

// type VS interface
// interface는 중복선인이 가능 type은 중복선언이 불가능
