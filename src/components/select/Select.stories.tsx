import React from 'react';
import {Select} from "./Select";
import {ComponentStory} from "@storybook/react";


export default {
    title: 'components/Select',
    component: Select,

};

const Template: ComponentStory<typeof Select> = (args) => <Select {...args}/>;
export const UncontrolledSelect = Template.bind({});
UncontrolledSelect.args={
    selectAc: true,
    items: [
        {title: 'VW', id: 1},
        {title: 'TOYOTA', id: 2},
        {title: 'chevrolet', id: 3},
        {title: 'Ford', id: 4},
    ],
}

