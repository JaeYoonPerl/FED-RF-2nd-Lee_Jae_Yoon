// 보그PJ 메인 JS - main.js

// 상단영역 불러오기
import TopArea from "./components/TopArea";
// 메인영역 불러오기
import MainArea from "./components/MainArea";
// 아이템 영역 불러오기
import ItemsArea from "./components/ItemsArea";
// 하단영역 불러오기
import FooterArea from "./components/FooterArea";
import Gallery from "./components/Gallery";


// [1] 메인 페이지 전체 레이아웃 로딩 컴포넌트
function Layout(){ 
    // 상태관리변수 설정구역 ///////
    // [1] 메뉴 변경 상태변수
    const [menu,setMenu] = React.useState("home");

    // 화면 랜더링 직전에 CSS로딩 변경하기 ////
    React.useLayoutEffect(()=>{
        // menu 상태 변수에 의존시킨다!
        // 메인 CSS 대상요소 : #main-css
        document.querySelector("#main-css").href=
        menu=="home" 
        ? "./css/main.css"
        : menu =="gallery"
        ? "./css/gallery.css"
        :"./css/items.css"; 
    },[menu]);
    

    // 코드 리턴구역 ///////
    return(
    <React.Fragment>
        {/* 1. 상단영역 컴포넌트 */}
        <TopArea changeMenu={setMenu} />
        {/* 2. 메인영역 컴포넌트 */}
        {
        menu=="home"
        ?<MainArea />
        :menu=="gallery"
        ?<Gallery/>
        :<ItemsArea catName={menu} />}
         {/* 3. 하단영역 컴포넌트 */}
        <FooterArea />
    </React.Fragment>
    );
} // Layout 컴포넌트

// 메인 페이지 전체 출력하기
ReactDOM.render(<Layout/>,document.querySelector("#root"));

