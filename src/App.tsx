import React, {useReducer, useState} from 'react';
import './App.css';
import {Rating} from "./components/rating/Rating";
import {Tehnologies} from "./components/Tehnologies";
import {Accordion} from "./components/accordion/Accordion";
import {Header} from "./components/Header";
import {OnOff} from "./components/onOff/OnOff";
import {Select} from "./components/select/Select";
import {reducer} from "./components/accordion/Reducer";
import {ClockAnalog} from "./components/clock/clockAnalog/ClockAnalog";

export type ratingType = 0 | 1 | 2 | 3 | 4 | 5



function App() {
//======Rating=============================================
    const [rating, setRating] = useState<ratingType>(0);
    //===Acardion==============================================
    const [state, dispatchCollapsed] = useReducer(reducer, {collapsed:false})
    // const [collapsed, setCollapsed] = useState<boolean>(false)
    // ===onOff====================================================
    const [on, setOn] = useState(false)

    // ==SELECT=============================================
    const [selectAc, setSelectAc] = useState(false);
    const [items, setItems] = useState([
        {title: 'None', id: 1},
        {title: 'VW', id: 2},
        {title: 'TOYOTA', id: 3},
        {title: 'chevrolet', id: 4},
        {title: 'Ford', id: 5},
    ])

    return (
        <div className="App">
            <input/>
            <input type="password"/>
            <PageTitle title={'Hello, samurai! Let\'s go!'}/>
            <Header/>
            <Tehnologies/>
            <PageTitle title={'Hello Worlds'}/>
            Article 1
            <Rating rating={rating} setRating={setRating}/>
            <Accordion titleValue={"Menu"}
                       state={state}
                       dispatchCollapsed={dispatchCollapsed}
                // setCollapsed={setCollapsed}
                       items={[{title: 'Nik', value: 1},
                           {title: 'Vita', value: 2},
                           {title: 'Dima', value: 3},
                           {title: 'Vova', value: 4},]}
                       onClick={() => {
                       }}
            />
            {/*<OnOff active={true}/>*/}
            <OnOff on={on} setOn={setOn}/>
            {on.toString()}
            <Select selectAc={selectAc}
                    setSelectAc={setSelectAc}
                    items={items}
                    setItems={setItems}
            />
            <ClockAnalog/>
        </div>
    );
}

type PageTitlePropsType = {
    title: String,
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>;
}

export default App;


