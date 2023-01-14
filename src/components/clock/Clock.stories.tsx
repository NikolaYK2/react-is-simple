import React from 'react';
import {ComponentStory} from '@storybook/react';
import {Clock} from "./Clock";


export default {
    title: 'components/Clock',
    component: Clock,
};

const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args}/>;
export const BaseExempli = Template.bind({});
BaseExempli.args = {}
