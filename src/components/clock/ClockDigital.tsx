import React from 'react';

export const getTwoString = (num: number) => {
    return num < 10
        ? `${0}${num}`
        : num;
}

export type ClockDigitalType = {
    date: Date,
}

export const ClockDigital = (props: ClockDigitalType) => {
    return <>
        <span>{getTwoString(props.date.getHours())}</span>
        :
        <span>{getTwoString(props.date.getMinutes())}</span>
        :
        <span>{getTwoString(props.date.getSeconds())}</span>
    </>
}
