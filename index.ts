let obj = { name: "kim" };
Object.keys(obj);

interface Person {
  age: number;
  name: string;
}

type PersonKeys = keyof Person;
let a: PersonKeys = "name";

type Car = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};

type TypeChanger<MyType> = {
  [key in keyof MyType]: string;
};

type 새로운타입 = TypeChanger<Car>;
