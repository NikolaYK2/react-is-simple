import {ComponentStory} from "@storybook/react";
import React, {useMemo, useState} from "react";

export default {
    title: 'components/React.memo demo'
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

// type UsrType ={users: Array<string>}
const Users = (props: { users: Array<string> }) => {
    console.log('user')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
const UsersShell = React.memo(Users);
//=========================================================================

const Template: ComponentStory<any> = () => {
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
export const Example = Template.bind({})
//====================================================

const Template1: ComponentStory<any> = () => {
    const [a, setA] = useState(1);
    const [b, setB] = useState(5);

    let resultA = 1;
    let resultB = 1;

    //Внутри функция будет делать сложные вычисления, вторым параметром[] передаем сложные зависимости
    //на которыу реакт обращает внимание и решает перезапускать useMemo или нет
    //если оставить пустое[] - значит что запомниться один раз и будет возвращать
    //одно и то-же значение
    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA;
    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }
    return (
        <>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    )
}
//сложное вычисление
export const DifficultCourtingExample = Template1.bind({})
//====================================================================

const Template2: ComponentStory<any> = () => {
    console.log('counter')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Nik', 'Vita', 'Dima', 'Vova', 'Denis'])

    const onClickHandler = () => {
        setCounter(counter + 1)
    }

    const newUsers = useMemo(()=>{
       return  users.filter(u=>u.toLowerCase().indexOf('a')> -1);
    },[users]);

    const addUserHandler = () => {
        setUsers([...users, 'Nasta'])
        // users.push('Nasta' + new Date().getTime())
        // setUsers(users);
    }


    return <>
        <button onClick={onClickHandler}>+</button>
        <button onClick={addUserHandler}>add user</button>
        {counter}
        <UsersShell users={newUsers}/>
    </>
}


//сложное вычисление
export const helpsToReactMemo = Template2.bind({})
//================================================================