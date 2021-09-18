interface StringOnly {
    [key: string]: string;
}
declare let user: {
    name: string;
    age: string;
    location: string;
};
interface MyType {
    "font-size": MyType | number;
}
declare let css: MyType;
