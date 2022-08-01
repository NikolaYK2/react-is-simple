import React, {useState} from 'react';
import s from "./OnOff.module.css";

type OnOffType={
    // active:boolean,
}

export const OnOff = (props:OnOffType) => {
    return (
        <div>
            {/*{props.active && <OnOffTitle active={true}/>}*/}
            {/*{!props.active && <OnOffTitle active={false}/>}*/}
            <OnOffTitle/>
        </div>
    );
};


const OnOffTitle = (props: OnOffType) => {
    let [on, setOn] = useState(false)

    let selectOn = on ? s.on : "";
    let selectOff = !on ? s.off : "";



    return (
        <div className={s.onOff}>
            <div className={selectOn} onClick={()=>setOn(true)}>on</div>
            <div className={selectOff} onClick={()=>setOn(false)}>off</div>
            <div className={`${selectOn} ${selectOff}`}></div>
        </div>
    );
};

