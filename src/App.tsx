import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/rating/Rating";
import {Tehnologies} from "./components/Tehnologies";
import {Accordion} from "./components/accordion/Accordion";
import {Header} from "./components/Header";
import {OnOff} from "./components/onOff/OnOff";

export type ratingType = 0 | 1 | 2 | 3 | 4 | 5

function App() {
//======Rating=============================================
    let [rating, setRating] = useState<ratingType>(0);
    //===Acardion==============================================
    let [collapsed, setCollapsed] = useState<boolean>(false)
    // ===onOff====================================================
    let [on, setOn] = useState(false)
    // ===============================================
    return (
        <div className="App">
            <input/>
            <input type="password"/>
            <PageTitle title={'Hello, samurai! Let\'s go!'}/>
            <Header/>
            <Tehnologies/>
            <PageTitle title={'Hello Worlds'}/>
            Article 1
            <Rating rating={rating} setRating={setRating} />
            <Accordion titleValue={"Menu"} collapsed={collapsed} setCollapsed={setCollapsed}/>
            <Accordion titleValue={"Users"} collapsed={collapsed} setCollapsed={setCollapsed}/>
            {/*<OnOff active={true}/>*/}
            <OnOff on={on} setOn={setOn}/> {on.toString()}
        </div>
    );
}

type PageTitlePropsType = {
    title: String,
}
function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle rendering")
    return <h1>{props.title}</h1>;
}

export default App;


