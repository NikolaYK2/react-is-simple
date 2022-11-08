import {ComponentStory} from "@storybook/react";
import React, {useCallback, useMemo, useState} from "react";

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


const Books = (props: { books: Array<string>; addBookHandler: () => void }) => {
    console.log('book')
    return <div>
        {props.books.map((b, i) => <div key={i}>{b}</div>)}
        <button onClick={props.addBookHandler}>add user</button>
    </div>
}
const UsersBooks = React.memo(Books);

const Template2: ComponentStory<any> = () => {
    console.log('LikeBookCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['the Witcher', 'pesn lda i plameni', 'Ono', 'Tuman', 'Vlastelin kolec'])


    const newBooks = useMemo(() => {
        return books.filter(b => b.toLowerCase().indexOf('w') > -1);
    }, [books]);

    const onClickHandler = () => {
        setCounter(counter + 1)
    }

    // const addBookHandler = () => {
    //     setBooks([...books, 'Witcher'])
    //     // users.push('Nasta' + new Date().getTime())
    //     // setUsers(users);
    // }
    // const memoizedAddBook = useMemo(()=>{
    //     return addBookHandler;
    // }, [books]);// проверяет поменялось ли что нибудь в [books]
//Сокращенная запись, сразу в хуке добаляем книги
    const memoizedAddBook = useMemo(()=>{
        return ()=> setBooks([...books, 'Witcher'])
            // users.push('Nasta' + new Date().getTime())
            // setUsers(users);
    }, [books]);// проверяет поменялось ли что нибудь в [books]
    const memoizedAddBook2 = useCallback( ()=> {
        setBooks([...books, 'Witcher'])
            // users.push('Nasta' + new Date().getTime())
            // setUsers(users);
    }, [books]);// проверяет поменялось ли что нибудь в [books]

    return <>
        <button onClick={onClickHandler}>+</button>
        {counter}
        <UsersBooks books={newBooks} addBookHandler={memoizedAddBook2}/>
    </>
}
//сложное вычисление
export const UseMemoUseCallback = Template2.bind({})
//================================================================