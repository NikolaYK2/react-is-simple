import React from 'react';

type AccordionType={
    titleValue: string,
}
export const Accordion = (props:AccordionType) => {
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>
    );
};

