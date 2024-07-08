import React, { useState } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import TopArea from "./components/layout/TopArea";
import MainArea from "./components/layout/MainArea";
import FooterArea from "./components/layout/FooterArea";

// 컨텍스트 API 불러오기
import { pCon } from "./components/modules/pCon";

// 전체 공통 CSS
import "./css/index.scss";
import CartList from "./components/modules/CartList";

function MainComponent() {
    // 상태관리 변수 셋팅
    // 1. 페이지 변경 상태 변수
    const [pgName, setPgName] = useState("main");
    // 2. 카트리스트 사용여부 : true 일때 사용
    const [cartSts,setCartSts] = useState(false);

    
   /****************************************** 
    [ 컨텍스트 API 공개 변수들 ]
    1. setPgName - 페이지 이름 셋팅
    2. setCartSts - 카트 사용여부 셋팅
   ******************************************/

    // 코드 리턴 구역 /////////////
    return (
        <pCon.Provider value={{setPgName,setCartSts}}>
            <TopArea />
            <MainArea page={pgName} />
            <FooterArea />
            {/* 카트리스트 :카트상태값 trur 출력 */}
            {cartSts && <CartList/>}
        </pCon.Provider>
    );
}

// 출력하기 //////
const root = createRoot(document.querySelector("#root"));
root.render(<MainComponent />);
