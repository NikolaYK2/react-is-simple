import React from 'react';

type AccordionType = {
    titleValue: string,
    collapsed: boolean,
}
export const Accordion = (props: AccordionType) => {
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            {!props.collapsed && <AccordionBody/>}
            {/*по сути у нас collapsed=true но !-говорит что false*/}
        </div>
    );
}


type AccordionTitleType = {
    title: string,
}

const AccordionTitle = (props: AccordionTitleType) => {
    return (
        <div>
            <h1>-- {props.title} --</h1>
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


