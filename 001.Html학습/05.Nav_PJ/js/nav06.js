// 네비게이션 유형6 JS - nav06.js
// 가로네비 서브별 드롭다운 전체창

// 내함수 불러오기
import mFn from "./my_function.js";


// 배너 리스트 셋팅하기
// 대상: .slide
const slideBox =mFn.qs('.slide');

// 슬라이드 코드변수
let slideCode ='';

// 슬라이드 li코드 만들기
for(let i=12; i<=24;i++){
  let temp =i;
  // 끝번호 둘 12,13번부터 시작하고 1부터 11까지 나열
  if(i>13) temp =i-13;
  slideCode +=`
    <li>
      <img src="./images/img_nav06/ban${temp}.png" alt="시코르 배너" />
    </li>
  `;
}/////for///

// 리스트 코드 요소에 출력하기
slideBox.innerHTML = slideCode;
