import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/rating/Rating";
import {Tehnologies} from "./components/Tehnologies";
import {Accordion} from "./components/accordion/Accordion";
import {Header} from "./components/Header";
import {OnOff} from "./components/onOff/OnOff";

function App() {


    return (
        <div className="App">
            <input/>
            <input type="password"/>
            <PageTitle title={'Hello, samurai! Let\'s go!'}/>
            <Header/>
            <Tehnologies/>
            <PageTitle title={'Hello Worlds'}/>
            Article 1
            <Rating/>
            <Accordion titleValue={"Menu"}/>
            <Accordion titleValue={"Users"}/>
            {/*<OnOff active={true}/>*/}
            <OnOff />
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


