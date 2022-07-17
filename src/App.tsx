import React from 'react';
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
            Article 1
            <Rating value={1}/>
            <Header/>
            <Tehnologies/>
            <PageTitle title={'Hello Worlds'}/>
            Article 1
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <OnOff active={true}/>
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


