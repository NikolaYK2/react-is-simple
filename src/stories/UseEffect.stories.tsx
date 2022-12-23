import {ComponentStory} from "@storybook/react";
import {useEffect, useState} from "react";

export default {
    title: 'components/UseEffect demo'
}



const Template: ComponentStory<any> = () => {


    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);
    console.log('UseState');

    useEffect(()=>{
        console.log('каждый раз, потому что без зависимостей');
        document.title = String(counter);
    },)

    useEffect(()=>{
        console.log('useEffect только один раз, когда компонента вмантировалась');
        document.title = String(counter);
    },[])

    useEffect(()=>{
        console.log('useEffect запускается только если меняется зависимость');
        document.title = String(counter);
    },[counter])

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={()=>setFake(fake + 1)}>Add fake</button>
            <button onClick={()=>setCounter(counter+1)}>Add count</button>
        </>
    );
}
export const UseEffect = Template.bind({});
