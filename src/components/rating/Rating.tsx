import React from "react";
import s from "./Rating.module.css";

type RatingType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export const Rating = (props: RatingType) => {

    return (
        <div className={s.rating}>
            <Star selected={props.value > 0}/>{/*//заменили все if на укороченную запись*/}
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    );
}

type StarType = {
    selected: boolean
}

const Star = (props: StarType) => {
    if (props.selected) {//укороченная запись props.selected === true
        return (
                <span><b>X </b></span>
        );
    } else {
        return (
                <span>X </span>
        )
    }
}

