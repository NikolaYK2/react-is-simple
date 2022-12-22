import {ComponentStory} from "@storybook/react";
import {useState} from "react";

export default {
    title: 'components/UseStateStories demo'
}

const Template: ComponentStory<any> = () => {
    console.log('UseStateStories');
    const [counter, setCounter] = useState(0)
    return (
        <>
            <button onClick={()=>setCounter(counter + 1)}></button>
        </>
    );
}
export const UseStateStories = Template.bind({});
