import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: OnOff,
} as ComponentMeta<typeof OnOff>;

const setOn=action("нажата")
const Template: ComponentStory<typeof OnOff> = (args) => {
    return (
        <OnOff {...args}/>
    )
}
export const OnOffControl = Template.bind({});
OnOffControl.args = {
    on:true,
    setOn:setOn,
}

const Template1: ComponentStory<typeof OnOff> = (args) => {
    let [on, setOn] = useState(false)
    return (
        <OnOff on={on} setOn={setOn}/>
    )
}

export const OnOffChange = Template1.bind({});
OnOffChange.args = {
    on:false,
    setOn:()=>{},
}

