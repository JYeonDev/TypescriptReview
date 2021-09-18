declare type Age<T> = T extends string ? string : unknown;
declare let a: Age<string>;
declare type Person<T> = T extends infer R ? string : unknown;
declare type 타입추출<T> = T extends (infer R)[] ? R : unknown;
declare type a = 타입추출<string[]>;
