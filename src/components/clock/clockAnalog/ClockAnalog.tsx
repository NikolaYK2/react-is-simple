import React, {useEffect, useState} from 'react';
import s from './ClockAnalog.module.css';
import {Clock} from "../Clock";

type PropsType = {}
export const ClockAnalog: React.FC<PropsType> = (props) => {
    const [arrow, setArrow] = useState(new Date());

    useEffect(() => {
        let idInterval = setInterval(() => {
            setArrow(new Date());
        }, 1000);
        return () => {
            clearInterval(idInterval);
        }
    }, []);
    console.log('tik')
    const secondClock = arrow.getSeconds() * 6;
    const minutesClock = arrow.getMinutes() * 6;
    const hourClock = arrow.getHours();

    return (
        <div className={s.containerClock}>
            <div className={s.arrowSecond} style={{transform: `rotate(${secondClock + 90}deg)`}}>
            </div>
            <div className={s.arrowMinutes} style={{transform: `rotate(${minutesClock + 90}deg)`}}>
            </div>
            <div className={s.arrowHour} style={{transform: `rotate(${hourClock}deg)`}}>
            </div>
            <Clock/>
        </div>
    );
};
