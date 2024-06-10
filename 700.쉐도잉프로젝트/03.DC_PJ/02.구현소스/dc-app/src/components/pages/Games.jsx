// 게임스 페이지 컴포넌트 ///
import Banner from "../modules/Banner";
import VidIntro from "../modules/VidIntro";
export default function Games(){
    // 코드 리턴구역 ////
    return(
        <>
           
           {/* 배너 컴포넌트  */}
           <Banner catName="GAMES" />

            {/* 1. 비디오소개 컴포넌트 */}
            <VidIntro catName="GAMES" clsName="on"/>
        </>
    );
} /////// Games /////