import React, {useEffect, useState} from 'react';

type PropsType = {}


export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        let idClock = setInterval(() => {
            setDate(new Date());
        },1000);
        return ()=>{
            clearInterval(idClock);
        }
    }, []);

    const getTwoString =(num:number)=>{
        return num < 10
            ? `${0}${num}`
            : num;
    }

    // const hoursString = getTwoString(date.getHours());
    // const minutesString = getTwoString(date.getMinutes());
    // const secondString = getTwoString(date.getSeconds());

    return (
        <div>
            <span>{getTwoString(date.getHours())}</span>
            :
            <span>{getTwoString(date.getMinutes())}</span>
            :
            <span>{getTwoString(date.getSeconds())}</span>
            {/*<span>{hoursString}</span>*/}
            {/*:*/}
            {/*<span>{minutesString}</span>*/}
            {/*:*/}
            {/*<span>{secondString}</span>*/}
        </div>
    );
};
