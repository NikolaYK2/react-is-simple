import React from 'react';
import s from './Accordion.module.css';
import {ReducerType, StateType} from "./Reducer";

type ItemType={
    title: string,
    value: any,
}

type AccordionType = {
    titleValue: string,
    state:StateType,
    dispatchCollapsed:(value: ReducerType)=>void,
    // setCollapsed:(value: boolean)=>void,
    items: ItemType[],
    onClick:(value:ReducerType)=>void,
}
export const Accordion = (props: AccordionType) => {

    const control = ()=>{
        if(!props.state.collapsed){
            props.dispatchCollapsed({type: 'COLLAPSED'});
        } else {
            props.dispatchCollapsed({type: 'COLLAPSED'});
        }
        // if(!props.collapsed){
        //     props.setCollapsed(true)
        // }else {
        //     props.setCollapsed(false)
        // }
    }
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            control={control}
                            state={props.state}/>
            {props.state.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
            {/*по сути у нас collapsed=true но !-говорит что false*/}
        </div>
    );
}

//================================================================================
type AccordionTitleType = {
    title: string,
    control:()=>void
    state:StateType,
}

const AccordionTitle = (props: AccordionTitleType) => {
    const onClockHandler=()=>{
        props.control()
    }
    // const accordStyle ={//css как бы кнопки
    //     cursor: "pointer",
    // }
    return (
        <div className={s.title}>
            <h1 className={props.state.collapsed ? s.green : s.red} onClick={onClockHandler}>-- {props.title} --</h1>
        </div>
    );
};
//============================================================================
type AccordionBodyType={
    items: ItemType[],
    onClick:(value:any)=>void,
}
const AccordionBody = (props:AccordionBodyType) => {

    const onClickHandler=(value:any)=>{
        props.onClick(value)
    }
    return (
        <div>
            <ul>
                {props.items.map((its,index)=>(<li onClick={onClickHandler} key={index}>{its.title}</li>))}
            </ul>
        </div>
    );
};


