interface StringOnly {
  [key: string]: string;
}

let user = {
  name: "kim",
  age: "20",
  location: "seoul",
};

interface MyType {
  "font-size": MyType | number;
}

let css: MyType = {
  "font-size": {
    "font-size": {
      "font-size": 14,
    },
  },
};
