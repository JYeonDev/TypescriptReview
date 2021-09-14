// HTML 조작시 narrowing 방법 5개
// 1.if
// let 제목 = document.querySelector("#title");
// if (제목 != null) {
//   제목.innerHTML = "반가워요";
// }

// 2.instanceof
// let 제목 = document.querySelector("#title");
// if (제목 instanceof Element) {
//   제목.innerHTML = "반가워요";
// }

// 3. as
// let 제목 = document.querySelector("#title") as Element;
// 제목.innerHTML = "반가워요";

// 4. ?
let 제목 = document.querySelector("#title");
if (제목?.innerHTML != undefined) {
  제목.innerHTML = "반가워요";
}

// 5. tsconfig.json 에서  "strictNullChecks": false

let 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
  링크.href = "https://kakao.com";
}
let 버튼 = document.querySelector("#button");
버튼?.addEventListener("click", function () {});
