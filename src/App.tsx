import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/rating/Rating";
import {Tehnologies} from "./components/Tehnologies";
import {Accordion} from "./components/accordion/Accordion";
import {Header} from "./components/Header";
import {OnOff} from "./components/onOff/OnOff";
import {Select} from "./components/select/Select";

export type ratingType = 0 | 1 | 2 | 3 | 4 | 5

function App() {
//======Rating=============================================
    const [rating, setRating] = useState<ratingType>(0);
    //===Acardion==============================================
    const [collapsed, setCollapsed] = useState<boolean>(false)
    // ===onOff====================================================
    const [on, setOn] = useState(false)
    // ==SELECT=============================================

    const [selectAc, setSelectAc]=useState(false);
    const [items, setItems]=useState([
        {title: 'VW', id: 1},
        {title: 'TOYOTA', id: 2},
        {title: 'chevrolet', id: 3},
        {title: 'Ford', id: 4},
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
            <Rating rating={rating} setRating={setRating} />
            <Accordion titleValue={"Menu"}
                       collapsed={collapsed}
                       setCollapsed={setCollapsed}
                       items={[]}
                       onClick={()=>{}}
            />
            {/*<OnOff active={true}/>*/}
            <OnOff on={on} setOn={setOn}/>
            {on.toString()}
            <Select selectAc={selectAc}
                    setSelectAc={setSelectAc}
                    items={items}
                    setItems={setItems}
            />
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


