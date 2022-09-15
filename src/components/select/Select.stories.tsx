import React, {useState} from 'react';
import {Select} from "./Select";
import {ComponentStory} from "@storybook/react";


export default {
    title: 'components/Select',
    component: Select,

};

const Template: ComponentStory<typeof Select> = (args) => <Select {...args}/>;
export const UncontrolledSelect = Template.bind({});
UncontrolledSelect.args = {
    selectAc: false,
    setSelectAc: (selectAc) =>[selectAc],
    items: [        {title: 'None', id: 1},
        {title: 'VW', id: 2},
        {title: 'TOYOTA', id: 3},
        {title: 'chevrolet', id: 4},
        {title: 'Ford', id: 5},
    ],
    setItems: (items) =>[items],
}
const Template1: ComponentStory<typeof Select> = () => {
    const [selectAc, setSelectAc]=useState(false);
    const [items, setItems]=useState([
        {title: 'None', id: 1},
        {title: 'VW', id: 2},
        {title: 'TOYOTA', id: 3},
        {title: 'chevrolet', id: 4},
        {title: 'Ford', id: 5},
    ])

    return (
        <Select selectAc={selectAc}
                setSelectAc={setSelectAc}
                items={items}
                setItems={setItems}
        />
    );
}
export const ControlledSelect = Template1.bind({});
ControlledSelect.args={
}

