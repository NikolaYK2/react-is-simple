import React from 'react';
import s from "./OnOff.module.css";

export type OnOffType={
    // active:boolean,
    on:boolean,
    setOn:(value: boolean)=>void,
}

export const OnOff = (props:OnOffType) => {

    return (
        <div>
            {/*{props.active && <OnOffTitle active={true}/>}*/}
            {/*{!props.active && <OnOffTitle active={false}/>}*/}
            <OnOffTitle on={props.on} setOn={props.setOn}/>
        </div>
    );
};


const OnOffTitle = (props: OnOffType) => {

    let selectOn = props.on ? s.on : s.default;
    let selectOff = !props.on ? s.off : s.default;

    const onClickHandler=(value: boolean)=>{
        props.setOn(value)
    }
    return (
        <div className={s.onOff}>
            <div className={selectOn} onClick={()=>onClickHandler(true)}>on</div>
            <div className={selectOff} onClick={()=>onClickHandler(false)}>off</div>
            {<div className={props.on ? s.on : s.off}></div>}
        </div>
    );
};

