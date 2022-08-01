import React, {useState} from 'react';

type AccordionType = {
    titleValue: string,
    // collapsed: boolean,
}
export const Accordion = (props: AccordionType) => {
    let [collapsed, setCollapsed] = useState(false)

    const control = ()=>{
        if(!collapsed){
            setCollapsed(true)
        }else {
            setCollapsed(false)
        }
    }
    return (
        <div>
            <AccordionTitle title={props.titleValue} control={control}/>
            {collapsed && <AccordionBody/>}
            {/*по сути у нас collapsed=true но !-говорит что false*/}
        </div>
    );
}

//================================================================================
type AccordionTitleType = {
    title: string,
    control:()=>void
}

const AccordionTitle = (props: AccordionTitleType) => {
    const onClockHandler=()=>{
        props.control()
    }

    const accordStyle ={//css как бы кнопки
        cursor: "pointer",
    }
    return (
        <div>
            <h1 style={accordStyle} onClick={onClockHandler}>-- {props.title} --</h1>
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


