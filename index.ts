type Age<T> = T extends string ? string : unknown;
let a: Age<string>;

type Person<T> = T extends infer R ? string : unknown;

type 타입추출<T> = T extends (infer R)[] ? R : unknown;

type a = 타입추출<string[]>;
