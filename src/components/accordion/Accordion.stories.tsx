import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const setCollapsed=action("нажата")
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
}


const Template1: ComponentStory<typeof Accordion> = () => {
    let [collapsed, setCollapsed] = useState<boolean>(false)
    return (
        <Accordion collapsed={collapsed} setCollapsed={setCollapsed} titleValue='Menu'/>
    )
}

export const AccordionChange = Template1.bind({});
AccordionChange.args = {
    titleValue:'Menu',
    setCollapsed: ()=>{},
    collapsed: false,
}

