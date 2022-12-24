import {ComponentStory} from "@storybook/react";
import {useEffect, useState} from "react";

export default {
    title: 'components/UseEffect demo'
}


const Template: ComponentStory<any> = () => {


    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);
    console.log('UseState');

    useEffect(() => {
        console.log('каждый раз, потому что без зависимостей');
        document.title = String(counter);
    },)

    useEffect(() => {
        console.log('useEffect только один раз, когда компонента вмантировалась');
        document.title = String(counter);
    }, [])

    useEffect(() => {
        console.log('useEffect запускается только если меняется зависимость');
        document.title = String(counter);
    }, [counter])

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => setFake(fake + 1)}>Add fake</button>
            <button onClick={() => setCounter(counter + 1)}>Add count</button>
        </>
    );
}
export const UseEffect = Template.bind({});

const Template1: ComponentStory<any> = () => {


    const [counter, setCounter] = useState(1);
    const [stopTime, setStopTime] = useState(setInterval(()=>{}));
    console.log('UseState');

    // useEffect(()=>{
    //     console.log('setTimout');
    //     setTimeout(()=>{
    //         document.title = String(counter);
    //     },1000)
    // },[])
    //     useEffect(() => {
    //         console.log('tick');
    //         setStopTime(setInterval(() => {
    //             setCounter(state => state + 1);
    //         }, 1000))
    //
    //     }, []);

    return (
        <>
            Hello, counter:{counter}
            <button onClick={()=>clearInterval(stopTime)}>stop</button>
        </>
    );
}
export const UseEffectSetTimout = Template1.bind({});

const Template2: ComponentStory<any> = () => {

    const [time, setTime] = useState(new Date());

    // useEffect(()=>{
    //     console.log('setTimout');
    //     setInterval(()=>{
    //             setTime(new Date())
    //     },1000)
    // },[])
    // useEffect(()=>{
    //     console.log('setTimout');
    //     setTimeout(function time(){
    //             setTime(new Date());
    //             setTimeout(time,1000);
    //     },1000);
    //
    // },[])

        const min = time.toLocaleTimeString('ru-ru')
    return (
        <>
            time: {min}
        </>
    );
}
export const clock = Template2.bind({});
