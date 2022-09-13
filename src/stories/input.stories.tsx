import React, {ChangeEvent, KeyboardEvent, useRef, useState} from 'react';
import {ComponentStory} from '@storybook/react';
import {action} from "@storybook/addon-actions";


export default {
    title: 'tegs/input',
    // component: Rating,

};

const Template: ComponentStory<any> = () => <input/>;
export const UncontrolledInput = Template.bind({});

//Наблюдаем value не контролированного импута, при каждом нажатии на символ
const Template1: ComponentStory<any> = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return <><input onChange={onChangeHandler}/> - {value}</>;
}
export const TrackValueOfUncontrolledInput = Template1.bind({});

//В отличии от предыдущего, узнаем значение импута при нажатии одного раза на кнопку
const Template2: ComponentStory<any> = () => {
    const [value, setValue] = useState('')
    // const newValue = React.createRef<HTMLInputElement>()
    const inputRef = useRef<HTMLInputElement>(null)//изначально компонента только отрисовывается, ссылки нету по этому null
    // const addValue = () => {
    //     let text = newValue.current!.value || '';
    //     if (text !== "") {
    //         setValue(text)
    //     }
    // }
    // const handler = () => {
    //     const el = document.getElementById('inputId') as HTMLInputElement;
    //     setValue(el.value)
    // }
    const addRefVal = () => {
        const textRef = inputRef.current as HTMLInputElement;//сurrent воспринимай как элемент
        setValue(textRef.value)
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addRefVal();
        }
    }
    return <><input /*id={'inputId'}*/ ref={inputRef} onKeyDown={onKeyDownHandler}/>
        <button onClick={addRefVal}>add</button>
        - actual value: {value}</>
}
export const GetValueOfUncontrolledInputByButtonPress = Template2.bind({});

//Контролируемый
const Template3: ComponentStory<any> = () => {
    const [parentValue, setParentValue] = useState('');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChangeHandler}/>;
};
export const ControlledInput = Template3.bind({});

//Контролируемый checkbox
const Template4: ComponentStory<any> = () => {
    const [check, setCheck] = useState(true)
    const onChangeCheck = (e: ChangeEvent<HTMLInputElement>) => {
        setCheck(e.currentTarget.checked)
    }
    return <input type='checkbox' checked={check} onChange={onChangeCheck}/>;
}
export const ControlledCheckbox = Template4.bind({});

//Контролируемый
const Template5: ComponentStory<any> = () => {
    const [select, setSelect]=useState<string | undefined>(undefined)
    const onChangeSelect=(e:ChangeEvent<HTMLSelectElement>)=>{
        setSelect(e.currentTarget.value)
    }
    return (
        <select value={select} onChange={onChangeSelect}>
            <option></option>
            <option value='1'>Molodechno</option>
            <option value='2'>Minsk</option>
            <option value='3'>Kiev</option>
        </select>
    );
}

export const ControlledSelect = Template5.bind({});

const Template6: ComponentStory<any> = () => <input value={'hi-Nik'}/>;
//Контролируемый с фиксированным значением
export const ControlledInputFixedValue = Template6.bind({});

