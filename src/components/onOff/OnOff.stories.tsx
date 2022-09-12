import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'components/OnOff',
    component: OnOff,
} as ComponentMeta<typeof OnOff>;

const setOn=action("нажата")

const setOnAll ={
    on:false,
    setOn:setOn,
}
const Template: ComponentStory<typeof OnOff> = (args) => {
    return (
        <OnOff {...args}/>
    )
}
export const OnOffControl = Template.bind({});
OnOffControl.args = {
    ...setOnAll,
}

const Template1: ComponentStory<typeof OnOff> = (args, context) => {
    let [on, setOn] = useState(false)
    return (
        <OnOff on={on} setOn={setOn}/>
    )
}

export const OnOffChange = Template1.bind({});
OnOffChange.args = {
    ...setOnAll,
}

