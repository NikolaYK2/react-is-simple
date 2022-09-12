import React, {ChangeEvent, KeyboardEvent, useRef, useState} from 'react';
import {ComponentStory} from '@storybook/react';


export default {
    title: 'input',
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


const Template3: ComponentStory<any> = () => <input value={'hi-Nik'}/>;
//Контролируемый с фиксированным значением
export const ControlledInputFixedValue = Template3.bind({});

