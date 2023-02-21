import React from 'react';
import {ComponentStory} from '@storybook/react';
import {ClockAnalog} from "./ClockAnalog";


export default {
    title: 'components/MyClock',
    component: ClockAnalog,
};

const Template: ComponentStory<typeof ClockAnalog> = (args) => <ClockAnalog {...args}/>;
export const BaseExempliAnalog = Template.bind({});
BaseExempliAnalog.args = {}

