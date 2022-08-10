import React, {useState} from 'react';
import s from './Accordion.module.css';

type AccordionType = {
    titleValue: string,
    collapsed:boolean,
    setCollapsed:()=>void
    // collapsed: boolean,
}
export const Accordion = (props: AccordionType) => {

    const control = ()=>{
        if(!collapsed){
            setCollapsed(true)
        }else {
            setCollapsed(false)
        }
    }
    return (
        <div>
            <AccordionTitle title={props.titleValue} control={control} collapsed={collapsed}/>
            {collapsed && <AccordionBody/>}
            {/*по сути у нас collapsed=true но !-говорит что false*/}
        </div>
    );
}

//================================================================================
type AccordionTitleType = {
    title: string,
    control:()=>void
    collapsed:boolean,
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
            <h1 className={props.collapsed ? s.green : s.red} onClick={onClockHandler}>-- {props.title} --</h1>
        </div>
    );
};

const AccordionBody = () => {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
};


