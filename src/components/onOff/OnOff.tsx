import React from 'react';
import s from "./OnOff.module.css";

type OnOffType={
    active:boolean,
}

export const OnOff = (props:OnOffType) => {
    return (
        <div>
            {props.active && <OnOffTitle active={true}/>}
            {!props.active && <OnOffTitle active={false}/>}
        </div>
    );
};

const OnOffTitle = (props: OnOffType) => {
    let selectOn = props.active ? s.on : "";
    let selectOff = !props.active ? s.off : "";

    return (
        <div className={s.onOff}>
            <div className={selectOn}>on</div>
            <div className={selectOff}>off</div>
            <div className={`${selectOn} ${selectOff}`}></div>
        </div>
    );
};
//========================================================
// export const OnOff = (props:OnOffType) => {
//     let selectOn = props.active ? s.on : "";
//     let selectOff = !props.active ? s.off : "";
//     return (
//         <div className={s.onOff}>
//             <div className={selectOn}>on</div>
//             <div className={selectOff}>off</div>
//             <div className={`${selectOn} ${selectOff}`}></div>
//         </div>
//     );
// };


