import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'components/Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const setCollapsed=action("нажата")
const onClick=action("был кликнут")

const Template: ComponentStory<typeof Accordion> = (args) => {
    return (
        <Accordion {...args}/>
    )
}
export const AccordionControl = Template.bind({});
AccordionControl.args = {
    titleValue:'Menu',
    setCollapsed: setCollapsed,
    collapsed: false,
    onClick: onClick,
    items:[]
}


const Template1: ComponentStory<typeof Accordion> = () => {
    let [collapsed, setCollapsed] = useState<boolean>(false)
    return (
        <Accordion collapsed={collapsed}
                   setCollapsed={setCollapsed}
                   titleValue='Menu'
                   onClick={(value)=>{alert(`users ${value}` )}}
                   items={[
                       {title:'Nik', value: 1 },
                       {title:'Vita', value: 2 },
                       {title:'Dima', value: 3 },
                       {title:'Vova', value: 4 },
                   ]}
        />
    )
}

export const AccordionChange = Template1.bind({});
AccordionChange.args = {
    titleValue:'Menu',
    setCollapsed: ()=>{},
    collapsed: false,
    onClick:onClick,
    items:[
        {title:'Nik', value: 1 },
        {title:'Vita', value: 2 },
        {title:'Dima', value: 3 },
        {title:'Vova', value: 4 },
    ],

}

