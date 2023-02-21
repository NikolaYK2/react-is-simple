import React, {useEffect, useState} from 'react';
import {ClockDigital} from "./ClockDigital";
import {ClockAnalog} from "./ClockAnalog";

type PropsType = {
    mode?: 'analog',
}


export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        let idClock = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(idClock);
        }
    }, []);


    // const hoursString = getTwoString(date.getHours());
    // const minutesString = getTwoString(date.getMinutes());
    // const secondString = getTwoString(date.getSeconds());

    let view;

    switch (props.mode) {
        case 'analog': {
            view = <ClockAnalog date={date}/>;
            break;
        }
        default:
            view = <ClockDigital date={date}/>;

    }
    return (
        <div>
            {/*{props.mode !== 'analog' ?*/}
            {/*    <>*/}
            {/*        <span>{getTwoString(date.getHours())}</span>*/}
            {/*        :*/}
            {/*        <span>{getTwoString(date.getMinutes())}</span>*/}
            {/*        :*/}
            {/*        <span>{getTwoString(date.getSeconds())}</span>*/}
            {/*    </>*/}
            {/*    : <>Analog</>*/}
            {/*}*/}
            {/*<span>{hoursString}</span>*/}
            {/*:*/}
            {/*<span>{minutesString}</span>*/}
            {/*:*/}
            {/*<span>{secondString}</span>*/}
            {view}
        </div>
    );
};

