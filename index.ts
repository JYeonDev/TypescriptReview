function 함수(...a: number[] | boolean[]) {
  console.log(a[2]);
}
함수(1, 3, 5, 6, 2, 2);

let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2];

console.log(arr3);

let [변수1, 변수2] = ["안녕", 100];

console.log(변수1);

let { student, age } = { student: true, age: 20 };
function 함수2({ student, age }) {
  console.log(student, age);
}
함수2({ student: true, age: 20 });
