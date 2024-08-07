// 02. 컴포넌트 연습2 - 부모변수를 자식에게 전달 JS
// ->> Props Down 프롭스 다운!!!

// 뷰 JS 인스턴스 생성용 함수 : x 는 대상요소
const makeVue = (x) => new Vue({ el: x });

// 1. 제목에 넣을 전역 컴포넌트 만들기
// Vue.component(케팝케이스 컴포넌트태그명, {옵션})
// 이것으로 생성함
// 같은 이름의 태그 구성요소에 실제 template값이 들어감!
Vue.component("tit-comp", {
    template: `
    <strong>
        <span>
            😊Vue JS😜 컴포넌트 : 
        </span>
        쇼핑모~~~올 갤러리 리스트
    </strong>
`,
}); // 전역 컴포넌트 1 ///

// 컴포넌트를 먼저 만들고나서 뷰인스턴스 생성함

// 뷰인스턴스 생성하기 : 타이틀 컴포넌트
makeVue(".tit");

// 갤러리 리스트용 변수 셋팅 ////
// (1) 갤러리 이미지번호용 변수
let inum = 0;
// (2) 상품명 배열
const goods = ["프레이컷", "아일렛기모", "베어부클", "포멀믹스톤"];

// 2. 갤러리 리스트에 넣을 전역 컴포넌트 만들기
Vue.component("list-comp", {
    // 2-1. template 옵션 : 태그구성
    // v-bind:속성 디렉티브
    // 변수를 사용할 수 있는 속성재구성해줌!
    template: `
      <div>
        <img v-bind:src="gsrc" alt="의류아이템">
        <aside>
          <h2 v-text="gname"></h2>
          <h3 v-text="gprice"></h3>
        </aside>
      </div>
    `, // template ////
    // 2-2. data 옵션 : 컴포넌트 내부 변수셋팅
    // 실행원리 : 컴포넌트가 빌드할때
    // data 속성의 함수를 호출한다!
    // 그래서 함수의 리턴되는 객체값이
    // 컴포넌트 내부에 전달된다!
    // data: function(){}
    data() {
        // 객체리턴 필수
        return {
            // 이미지 src
            gsrc: `./images/${this.setNum()}.jpg`,
            // 상품명
            gname: this.setName(),
            // 상품가격
            gprice: this.setPrice(),
        };
    }, /// data ////
    // 2-3. methods 속성 : 컴포넌트 내부 메서드 셋팅
    methods: {
        // (1) 이미지 번호 만들기 함수
        // 외부전역변수 inum을 1씩 증가하여 리턴함
        setNum() {
            return ++inum;
        },
        // (2) 상품명 만들기 함수
        setName() {
            return goods[Math.random() * 4];
        },

        // (3) 가격만들기 함수
        setPrice() {
            let rdm = Math.ceil(Math.random() * 17) + 3;
            return this.addCommas(20000 * rdm) + "원";
        },
        // (4) 세자리콤마 함수
        addCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
    },
}); /// component

// 뷰인스턴스 생성하기 : 리스트 컴포넌트
makeVue(".grid");

// 3. 유튜브 동영상 컴포넌트 만들기
Vue.component("ifr-comp",{
    // 3-1. template 옵션
    template:`
    <iframe width="49%" style="aspect-ratio: 16/9;" 
    v-bind:src="ifrSrc" title="#고윤정 과 함께 차가운 겨울을 더욱 액티브하게!  l 디스커버리 23FW #goyounjung #크롭패딩" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
    `, // template ///
    // 3-2. data 옵션
    data(){
        return{
            ifrSrc: `https://www.youtube.com/embed/ZH1Y1l1OmTY?autoplay=1&mute=1&loop=1&playlist=ZH1Y1l1OmTY`,
        };
    }, // data ///
});

// 뷰인스턴스 생성하기 : 유튜브 동영상 컴포넌트
makeVue(".you-box");



Vue.component("footer-comp",{
    template:`
    <div style="background-color:black;text-align:center;color:white;line-height:2;font-weight:bold; padding:3vw; margin-top:1vw;">
    <h2>Copyright © F&F Corp. All Rights Reserved.</h2>
    <h3>대표: 김창수 / 서울특별시 강남구 언주로 541 에프앤에프빌딩

    사업자 등록번호: 153-81-02451
    
    사업자정보 확인
    통신판매업 신고번호 : 제2021-서울강남-03353호
    
    개인정보보호 책임자 : 류영석
    
    교환・반품 반송처 : 경기도 이천시 대월면 초지리 57 F&F 물류센터 디스커버리 물류부
    
    고객센터 : 080-820-8802 / 운영시간 : 평일 오전 9시 ~ 오후 6시(토/일/공휴일 휴무)
    </h3>
    </div>
    `,
});
// 뷰인스턴스 생성하기 : 하단정보 컴포넌트
makeVue(".tit2");


