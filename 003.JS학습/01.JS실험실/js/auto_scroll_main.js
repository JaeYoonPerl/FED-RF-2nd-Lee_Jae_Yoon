// 자동스크롤 호출하는 메인 JS

import AutoScrollFn from "./auto_scroll.js";

// 자동스크롤 함수 호출하기
// -> 생성자 함수 이므로 new 키워드로 호출한다.
const scrollObj = new AutoScrollFn();
console.log(scrollObj.pgNum);