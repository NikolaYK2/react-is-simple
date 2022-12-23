import {ComponentStory} from "@storybook/react";
import {useMemo, useState} from "react";

export default {
    title: 'components/UseStateStories demo'
}

function generateData() {
    console.log('generateData');
    return 1;
}

const Template: ComponentStory<any> = () => {
    console.log('UseState');

    // const initValue = useMemo(generateData,[]);
    //useMemo в данном случаи не нужен, useState сам себя оптимизирует и
    // вызовет тяжелую функцию один раз

    const [counter, setCounter] = useState(generateData);
    //В setCounter передаем новое значние, а можно передовать сюда функцию

    // const changer =(state:number)=> state + 1;
    return (
        <>
            <button onClick={() => setCounter(state => state + 1)}>+</button>
            {/*<button onClick={()=>setCounter(changer)}>+</button>*/}
            {/*<button onClick={()=>setCounter(counter + 1)}>+</button>*/}

            {counter}
        </>
    );
}
export const UseStateStories = Template.bind({});
