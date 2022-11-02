import React, {useMemo, useState} from 'react';
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
    setSelectAc: (selectAc) => [selectAc],
    items: [{title: 'None', id: 1},
        {title: 'VW', id: 2},
        {title: 'TOYOTA', id: 3},
        {title: 'chevrolet', id: 4},
        {title: 'Ford', id: 5},
    ],
    setItems: (items) => [items],
}
const Template1: ComponentStory<typeof Select> = () => {
    const [selectAc, setSelectAc] = useState(false);
    const [items, setItems] = useState([
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


type SelectMemoType = {
    value: string,
    setValue: (value: string) => void,
    items: itemsType[],
    setSelect: (select: boolean) => void,
    select: boolean,
}
const SelectMemo = (props: SelectMemoType) => {

    const ofOnSelect = () => {
        if (!props.select) {
            props.setSelect(true)
        } else {
            props.setSelect(false)
        }
    }
    console.log('componets')
    return (
        <div onClick={ofOnSelect}>
            {props.value}
            {props.items.map(e => {

                const setValueClick = () => {
                    props.setValue(e.title);
                }
                return (
                    <>
                        {props.select && <div key={e.id} onClick={setValueClick}>
                            {e.title}
                        </div>
                        }
                    </>
                );
            })}
        </div>
    )
}

const SelectMemoShell = React.memo(SelectMemo);


type itemsType = {
    title: string,
    id: number,
}
const Template2: ComponentStory<typeof Select> = () => {
    const [select, setSelect] = useState(false);
    const [value, setValue] = useState('none');
    const [items, setItems] = useState<itemsType[]>([
        {title: 'None', id: 1},
        {title: 'VW', id: 2},
        {title: 'TOYOTA', id: 3},
        {title: 'chevrolet', id: 4},
        {title: 'Ford', id: 5},
    ]);
    const [count, setCount] = useState(items.length);


    console.log('no render')

    const addAutoMemo = useMemo(()=>{
        return [...items, {title: 'VazGavno', id: 6}]
    },[items])
    const addAuto = () => {
         setItems(addAutoMemo);
         setCount(items.length);
    }


    return (
        <div>
            <button onClick={addAuto}>add</button>
            {count}
            <SelectMemoShell
                value={value}
                setValue={setValue}
                items={addAutoMemo}
                setSelect={setSelect}
                select={select}
            />
        </div>
    );
}
export const HelpExampleSelect = Template2.bind({});



