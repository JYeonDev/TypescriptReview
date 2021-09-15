function 함수(a: string | undefined) {
  if (a && typeof a === "string") {
  }
}

// a가 undefined 면 if문 실행 X
// a가 string 이면 if문 실행 O

type Fish = { swim: string };
type Bird = { fly: string };

function 함수2(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim;
  }
}

type Car = {
  wheel: "4개";
  color: string;
};

type Bike = {
  wheel: "2개";
  color: string;
};

function 함수3(x: Car | Bike) {
  if (x.wheel === "4개") {
    console.log("x는 Car 타입이다.");
  }
}
