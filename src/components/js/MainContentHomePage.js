import React from "react";
import TapPanel from "./TapPanel.js";
import Banner from "./Banner.js";
import style from '../CSSModules/MainContentHomePage.module.css';

function MainContentHomePage(props) {
    // props: searchWord
    return <div className={style.mainContent}>
        <Banner></Banner>
        <TapPanel field="python_res" searchWord={props.searchWord}></TapPanel>
    </div>
}

export default MainContentHomePage;