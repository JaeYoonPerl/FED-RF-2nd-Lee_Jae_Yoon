// 회원가입 유효성 검사 JS

export default function validateFn() {
    console.log("검사해~!!!");
    /********************************************** 
      [ 사용자 입력폼 유효성 검사 ]
      - 이벤트 종류 : blur(포커스가 빠질때 발생)
      - 제이쿼리 이벤트 메서드 :  blur()
      - 이벤트 대상: 
      ->입력요소 중 text(아이디email2제외),password
          form.logF input[type=text][id!=email2],
          form.logF input[type=password],
      -> 요소뒤 대괄호는 속성선택자(CSS원래문법)
      [id!=email2] !=은 같지않다(제이쿼리용문법)
  
  **********************************************/
    $(`form.logF input[type=text][id!=email2],
  form.logF input[type=password]`).blur(function () {
      /****************************************** 
          1. 현재 블러가 발생한 요소의 아이디는?
      ******************************************/
      let cid = $(this).attr("id");
      // attr(속성명) -> 속성값 읽어오기
      // cid는 current id 즉, 현재 아이디
  
      /****************************************** 
      2. 현재 블러가 발생한 요소의 값은?
      ******************************************/
      let cv = $(this).val();
      // val() -> 입력값 읽어오기
      // trim() -> 앞뒤공백제거
      // cv는 current value 즉, 현재값
  
      // trim()은 중간 공백 제거는 안하므로
      // 모든공백을 제거하는 함수를 만들어쓴다!
      const groSpace = (x) => x.replace(/\s/g, "");
      // get rid of space 즉, 공백제거함수
      // 정규식은 슬래쉬(/) 사이에 쓰며
      // \s는 스페이스기호이고 g는 전역(global) 플래그다!
      // 플래그(flag)는 기술용어로 처리표시기호를 뜻함
  
      // 이름(#mnm)일 경우 중간공백은 있어야하므로
      // 삼항연산자로 trim()을 함께 사용한다!
      cv = cid == "mnm" ? cv.trim() : groSpace(cv);
  
      // 공백제거후 입력창에 반영시켜준다!
      $(this).val(cv);
  
      console.log("현재아이디:", cid, "\n값:", cv);
      /************************************* 
          3. 빈값 여부 검사하기 (필수입력항목)
      *************************************/
      if (cv == "") {
        //  메시지 출력하기
        $(this).siblings(".msg").text("필수입력");
        // 형제요소들 중 .msg인 요소에 글자를 출력함
        // 형제요소 선택은 siblings(특정이름)
      } //////////// if //////////
  
      /**************************************** 
          4. 아이디일 경우 유효성 검사
          - 검사기준: 
          영문자로 시작하는 6~20글자 영문자/숫자
      ****************************************/
      else if (cid == "mid") {
        // 검사결과
        // console.log(vReg(cv,cid));
        if (!vReg(cv, cid)) {
          // 아이디검사 불통과시
          // false결과시 들어와야 하므로 Not(!)연산자사용
          //  메시지 지우기
          $(this)
            .siblings(".msg")
            .text("영문자로 시작하는 6~20글자 영문자/숫자")
            .removeClass("on");
        } /////////// if //////////
        else {
          // 아이디검사 통과시
          // 1. DB에 조회하여 같은 아이디가 있다면
          // '이미 사용중인 아이디입니다' 와 같은 메시지출력
          // 2. 만약 DB조회하여 같은 아이다가 없다면
          // '멋진 아이디네요~!'와 같은 메시지출력
          // 여기서 우선은 DB조회 못하므로 통과시 메시지로 출력
          $(this).siblings(".msg").text("멋진아이디네요!").addClass("on");
          // 클래스 on을 넣으면 녹색글자임!
        } //////// else ////////
      } ///////////// else if //////////
      /**************************************** 
          5. 비밀번호일 경우 유효성 검사
          - 검사기준: 
          특수문자,문자,숫자포함 형태의 5~15자리
      ****************************************/
      else if (cid == "mpw") {
        // 검사결과
        // console.log("비번:",vReg(cv,cid));
        if (!vReg(cv, cid)) {
          // 비밀번호검사 불통과시
          // false결과시 들어와야 하므로 Not(!)연산자사용
          //  메시지 지우기
          $(this).siblings(".msg").text("특수문자,문자,숫자포함 형태의 5~15자리");
        } /////////// if //////////
        else {
          // 맞으면 메시지 삭제
          $(this).siblings(".msg").empty();
          // empty() - 내용지우기
          // $(this).siblings(".msg").text("");
        } ///////////// else ////////////
      } ///////////// else if //////////
      /**************************************** 
          6. 비밀번호확인일 경우 유효성 검사
          - 검사기준: 비빌번호 항목과 일치여부
      ****************************************/
      else if (cid == "mpw2") {
        if (cv != $("#mpw").val()) {
          // 비밀번호확인검사 불통과시
          // false결과시 들어와야 하므로 Not(!)연산자사용
          //  메시지 지우기
          $(this).siblings(".msg").text("비밀번호가 일치하지 않습니다!");
        } /////////// if //////////
        else {
          // 맞으면 메시지 삭제
          $(this).siblings(".msg").empty();
          // empty() - 내용지우기
          // $(this).siblings(".msg").text("");
        } ///////////// else ////////////
      } ///////////// else if //////////
      /**************************************** 
          7. 이메일 유효성 검사
          - 검사기준: 이메일 형식에 맞는지 여부
      ****************************************/
      else if (cid == "email1") {
        // 1. 이메일 주소 만들기 : 앞주소@뒷주소
        let comp =
          eml1.val() + "@" + (seleml.val() == "free" ? eml2.val() : seleml.val());
        // 이메일 뒷주소는 직접입력("free")이면 뒷주소입력창
        // 아니면 선택박스 option value 을 가져온다!
        console.log("이메일:", comp);
  
        // 2. 이메일 검사함수 호출하기
        resEml(comp);
      } ///////////// else if //////////
      /**************************************** 
          8. 모두 통과일 경우 메시지 지우기
      ****************************************/
      else {
        //  메시지 지우기
        $(this).siblings(".msg").text("");
      } ///// else ////////
    }); //////////////// blur함수 ////////////////
  
    /****************************************** 
      함수명 : resEml (result Email)
      기능 : 이메일 검사결과 처리
    ******************************************/
    const resEml = (comp) => {
      // comp - 이메일주소
      // console.log('이메일주소:',comp);
      // console.log('이메일검사결과:',vReg(comp,'eml'));
  
      // 이메일 정규식 검사에 따른 메시지 보이기
      if (vReg(comp, "eml")) {
        eml1.siblings(".msg").text("적합한 이메일 형식입니다!").addClass("on");
      } //////// if : 통과시 //////////
      else {
        eml1
          .siblings(".msg")
          .text("맞지않는 이메일 형식입니다!")
          .removeClass("on");
      } //////// else : 불통과시 ////////
    }; ///////////// resEml /////////////////
  
    /////////// 이메일 관련 대상선정 /////////////
    // 이메일 앞주소
    const eml1 = $("#email1");
    // 이메일 뒷주소
    const eml2 = $("#email2");
    // 이메일 뒷주소 선택박스
    const seleml = $("#seleml");
    ////////////////////////////////////////////
  
    /************************************** 
        비밀번호 글자 보이기/숨기기 셋팅
    **************************************/
    $(".eye")
      .css({
        textDecoration: "line-through",
        opacity: 0.5,
        cursor: "pointer",
      })
      .click((e) => {
        // 투명도값 읽기
        let opa = $(e.target).css("opacity");
        console.log(opa);
        // 1. 글자 보이기 전환 (투명도가 0.5일때 보이게함!)
        $("#mpw").attr("type", opa == "0.5" ? "text" : "password");
        // 2. CSS 디자인 전환
        $(e.target).css({
          textDecoration: opa == "0.5" ? "none" : "line-through",
          opacity: opa == "0.5" ? "1" : "0.5",
        }); /// css ///
      }); ///// click /////
  } ////////////////// validateFn /////////////////
  
  /*//////////////////////////////////////////////////////
      함수명: vReg (validation with Regular Expression)
      기능: 값에 맞는 형식을 검사하여 리턴함
      (주의: 정규식을 따옴표로 싸지말아라!-싸면문자가됨!)
  */ //////////////////////////////////////////////////////
  function vReg(val, cid) {
    // val - 검사할값, cid - 처리구분아이디
    // console.log("검사:"+val+"/"+cid);
  
    // 정규식 변수
    let reg;
  
    // 검사할 아이디에 따라 정규식을 변경함
    switch (cid) {
      case "mid": // 아이디
        reg = /^[a-z]{1}[a-z0-9]{5,19}$/g;
        // 영문자로 시작하는 6~20글자 영문자/숫자
        // /^[a-z]{1} 첫글자는 영문자로 체크!
        // [a-z0-9]{5,19} 첫글자 다음 문자는 영문 또는 숫자로
        // 최소 5글자에서 최대 19글자를 유효범위로 체크!
        // 첫글자 한글자를 더하면 최소 6글자에서 최대 20글자체크!
        break;
      case "mpw": // 비밀번호
        reg = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
        // 특수문자,문자,숫자포함 형태의 5~15자리
        // (?=^.{5,15}$) 시작부터 끝까지 전체 5~15자릿수 체크!
        // (?=.*\d) 숫자 사용체크!
        // (?=.*[a-zA-Z]) 영문자 대문자 또는 소문자 사용체크!
        // (?=.*[!@#$%^&+=]) 특수문자 사용체크!
        break;
      case "eml": // 이메일
        reg =
          /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
        // 이메일 형식에 맞는지 검사하는 정규식
        break;
    } //////////// switch case문 //////////////////
  
    // //console.log("정규식:"+reg);
  
    // 정규식 검사를 위한 JS메서드
    // -> 정규식.test(검사할값) : 결과 true/false
    return reg.test(val); //호출한 곳으로 검사결과리턴!
  } //////////// vReg 함수 //////////////////////////////
  ///////////////////////////////////////////////////////
  