import {ComponentStory} from "@storybook/react";
import React, {useState} from "react";

export default {
    title: 'components/React.memo demo'
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

// type UsrType ={users: Array<string>}
const Users = (props: { users: Array<string> }) => {
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
const UsersShell = React.memo(Users);

export const Example: ComponentStory<any> = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Nik', 'Vita', 'Dima', 'Vova', 'Denis'])

    const onClickHandler = () => {
        setCounter(counter + 1)
    }

    const addUserHandler = () => {
        setUsers([...users, 'Nasta'])
        // users.push('Nasta' + new Date().getTime())
        // setUsers(users);
    }
    return <>
        <button onClick={onClickHandler}>+</button>
        <button onClick={addUserHandler}>add user</button>
        <NewMessagesCounter count={counter}/>
        <UsersShell users={users}/>
    </>
}

// const Template = Example.bind({})