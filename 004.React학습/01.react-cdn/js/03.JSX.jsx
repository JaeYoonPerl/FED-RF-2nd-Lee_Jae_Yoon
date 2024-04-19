// 03.JSX 특성 알아보기

/***************************************************** 
    [ JSX란 무엇인가? ]
    - Javascript XML을 나타냄
    - 리액트에서 HTML을 쉽게 작성할 수 있다.
    - appendChild() 메서드 없이 DOM에 요소넣기가 가능함!
*****************************************************/

// 출력할 요소 선택
const target = document.querySelectorAll("#root>div");

// 1. JSX를 사용한 것과 JSX를 사용하지 않는 것을 비교
// (1) JSX를 사용한 예
// (1-1) 넣을 요소 만들기
const myEle1 = <h1>나는 JSX를 사용하고 있어!</h1>;

// (1-2) 리액트 루트 선택하기 : createRoot() 메서드 사용
const root1 = ReactDOM.createRoot(target[0]);
// (1-3) 요소 출력하기
// 생성된 루트에 render()메서드를 붙여서 사용!
root1.render(myEle1);

// (2) JSX를 사용하지 않는 방법
// -> 넣을 요소를 createElement() 메서드로 생성해야함
const myEle2 = React.createElement("h1", {}, "나는 JSX요소를 쓰지않아");
// createElement(요소명,{JS코드작성},요소내용)

// 두번째 div에 출력하기 ////
ReactDOM.render(myEle2, target[1]);

/***************************************************** 
    [ 출력방식 정리! ]
    1. 한꺼번에 쓰기
    ReactDOM.render(출력할요소,대상요소)

    2. 따로쓰기
        1) 생성변수 = ReactDOM.createRoot(대상요소)
        2) 생성변수.render(출력할요소)

    _____________________________________________

    [ JSX 를 사용하거나 사용하지 않는 경우 ]
    -> 개발자의 선택사항이다!
    -> JSX는 ES6 기반의 자바스크립트 언어의 확장이며
    런타임시 일반 자바스크립트로 변환된다!

    ______________________________________________

    [ JSX 표현식 ]
    JSX를 사용하면 중괄호에 표현식을 작성할 수 있다
    {........ 표현식 ........}

    -> 표현식이란 어떤 값으로 이행하는 임의의 유효한 
    코드 단위를 말한다! 
    즉, 코드가 값으로 변환되는 JS코드를 표현식이라고 한다.

    ((개념이해))
    예컨데 삼항연산자는 그 자리에 값을 출력할 수 
    있으므로 표현식이지만
    if문은 코드 전개구문이고 값이 출력되는 코드가 아니므로
    표현식이 아니다. 또 어떤값을 할당하는 코드도 할당행위만
    있고 값출력이 없으므로 표현식이 아니다!
    함수 자체는 표현식이 아니지만 리턴코드를 가진 함수를
    호출하는 코드는 값을 찍어주기 때문에 표현식이다!

    참고: 
    표현식(Expression)과 대비되는 코드를 
    문장(Statement)이라고함

*****************************************************/

// 표현식에 쓸 변수
let num1 = 1000,
    num2 = 7;

// 표현식에 사용할 리턴이 있는 함수
const retFn = () => `만만세다~!!!`;

// 3. JSX 표현식 사용하기
const myEle3 = (
    <div>
        <h1>리액트는 {num1 * num2}번 사용해도 좋다!</h1>
        <h1>리액트는 {num1 == 1000 ? "계속" : "한번만"} 사용해도 좋다!</h1>
        <h1>리액트는 {retFn()} </h1>
    </div>
);
// 세번째 div에 출력
ReactDOM.render(myEle3, target[2]);

// 4. 다중요소 html 블록 삽입하기 /.//
const myEle4 = (
    <React.Fragment>
        <h2>[ 다중요소 HTML 블록출력하기 ]</h2>
        <ul>
            <li>프론트엔드</li>
            <li>리액트적용개발</li>
            <li>플러터까지사용</li>
        </ul>
    </React.Fragment>
);

// 네번째에 출력하기 //////
ReactDOM.render(myEle4, target[3]);

/***************************************************** 
    [ JSX 태그요소 작성시 여러줄일 경우 ]
    1. 최상위를 하나 만들고 여러요소를 작성한다!
    2. 소괄호로 전체를 싸준다!(소괄호생략가능!)

    - 지원되는 스타일:
    1) <>태그들</>
    2) <Fragment>태그들</Fragment>
    3) <기존태그>태그들</기존태그>

    -> 1),2)번은 CDN방식에서는 지원안함!(설치형SPA지원!)
    -> 2)번 CDN에서 사용하려면 아래와 같이 사용한다!
        <React.Fragment></React.Fragment>
    -> 1),2)번을 사용하는 이유는 쓸때 없는 태그삽입을 막는데있다!
    -> 기존태그는 <div>,<section> 등 원래있는 html태그를 말함
        (단점, 원하는 않는 태그가 삽입됨!!!)
*****************************************************/

// 5. 내가 원하는 태그 출력해보기 ////////////

// 기본 데이터(배열)
const mydata = [
    { idx: 1, name: "김수현", movie: "언제왔니" },
    { idx: 2, name: "장우혁", movie: "형님,형~~~님" },
    { idx: 3, name: "김혜수", movie: "내가쎈언니야" },
];

// 출력형식:
// <li>배우명 : 영화명</li>
// 배열변수.map() 을 사용하자! -> 여기서도 맵쬬잉! 인가???
// -> JS map()과는 다른 별도의 출력처리가 이루어짐!
// 결론: map() 만 사용하여 바로 출력가능~!

const myEle5 = (
    <React.Fragment>
        <h2>[ 배우리스트 ]</h2>
        <ul>
            {mydata.map((v) => (
                <li>
                    {v.name} : {v.movie} : {v.idx == 3 ? "예뻐♥" : "멋져★"}
                </li>
            ))}
        </ul>
    </React.Fragment>
);

// 다섯번째에 출력하기 //////
ReactDOM.render(myEle5, target[4]);

/***************************************************** 
    [ JSX는 홀로태그라도 끝에 닫기를 해줘야한다! ]
    예) <br> -> <br />
        <input type="text"> -> <input type="text" />
*****************************************************/

// 6. 홀로태그 출력해 보기 //////////
const myEle6 = <input type="text" value="홀로태그는 스스로 닫아라!"/>;

// 여섯번째에 출력하기 //////
ReactDOM.render(myEle6, target[5]);

/***************************************************** 
    [ JSX에서 속성 클래스는 className 으로 표기한다! ]
    <태그 class="클래스명">
    class는 JS에서 키워드이므로 사용못함! 대신...
    <태그 className="클래스명">
    -> 리액트 버전 16부터 class라고 써도 자동 변환하여 클래스를 
    표시해주지만 경고메시지가 뜬다.
*****************************************************/

// 7. 속성으로 클래스 셋팅하여 사용하기 /////////
const myEle7 = (
    <h1 className="myclass">className 속성으로 클래스를 셋팅한다!</h1>
  );
  
  // 일곱번째에 출력하기 //////
  ReactDOM.render(myEle7, target[6]);


  /***************************************************** 
    [ JSX에서 조건문 사용하기 - if문 ]
    리액트는 if명령문을 지원하지만
    JSX내부에서는 지원하지 않는다!!!

    JSX에서 조건문을 사용하려면?
    JSX 외부에서 if문을 사용하거나
    아니면 내부에서 삼항연산자를 사용할 수 있다!
*****************************************************/

// 8. JSX외부에서 if문 사용하여 출력하기 /////////
const x = 1000;
const showResult = money =>{
    let txt = "";
    if (money < 10000) {
      txt = "돈이 부족해서 살 수 없어!";
    }
 /////showResult 함수
else{
    txt = "이 돈으로는 충분히 살 수 있어!";
}
// 결과값 리턴 필수
return txt;
};
// 출력변수
const myEle8 = (
  <div>
    <h1>현재 내가 가진 돈은 {x}원!</h1>
    <h1>{showResult(x)}</h1>
  </div>
);

// 여덟번째에 출력하기 //////
ReactDOM.render(myEle8, target[7]);


// 9. JSX의 표현식에 삼항연산자 사용하여 출력하기 ///////
let time = 10;

const myEle9 = (
  <React.Fragment>
    <h1>지금 몇시지? {time}시야!</h1>
    <h1>{time > 9 ? "지금 집에 들어와!" : "더 놀다와~!"}</h1>
  </React.Fragment>
);

// 아홉번째에 출력하기 //////
ReactDOM.render(myEle9, target[8]);
