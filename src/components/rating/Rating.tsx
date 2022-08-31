import React from "react";
import s from "./Rating.module.css";
import {ratingType} from "../../App";


export type RatingType = {
    rating: ratingType,
    setRating:(rating: ratingType)=>void,
}

export const Rating: React.FC<RatingType> = ({rating, setRating, ...props}) => {
const setRatingHandler=(rating: ratingType)=>{
    setRating(rating)
}
    return (
        <div className={s.rating}>
            {/*заменили все if на укороченную запись*/}
            {/*<Star selected={rating > 0} setRating={setRatingHandler} rating={1}/>*/}
            {/*<Star selected={rating > 1} setRating={setRatingHandler} rating={2}/>*/}
            {/*<Star selected={rating > 2} setRating={setRatingHandler} rating={3}/>*/}
            {/*<Star selected={rating > 3} setRating={setRatingHandler} rating={4}/>*/}
            {/*<Star selected={rating > 4} setRating={setRatingHandler} rating={5}/>*/}
            {/*Второй способ=================================================================================*/}
            <Star selected={rating > 0} setRating={()=> {setRatingHandler(1)}}/>
            <Star selected={rating > 1} setRating={()=> {setRatingHandler(2)}}/>
            <Star selected={rating > 2} setRating={()=> {setRatingHandler(3)}}/>
            <Star selected={rating > 3} setRating={()=> {setRatingHandler(4)}}/>
            <Star selected={rating > 4} setRating={()=> {setRatingHandler(5)}}/>
        </div>
    );
}

//=============================================================
export type StarType = {
    selected: boolean
    setRating: ()=>void,//value уже не передаем функция setRatingHandler сама все делает
    // setRating: (value: ratingType)=>void,
    // rating: ratingType,
}

export const Star: React.FC<StarType> = ({setRating, /*rating,*/ ...props}) => {
    // const onClockHandler=(value: ratingType)=>{
    //     setRating(value);
    const onClockHandler=()=>{
        setRating();
    }

    return (
        <div>
            {/*{props.selected ? <span onClick={onClockHandler}><b> stars - </b></span> : <span> - stars </span>}*/}
            {/*Условие делаем внутри span*/}
            {/*<span className={s.rating} onClick={()=>onClockHandler(rating)}>{props.selected ? '★' : " ☆ "}</span>*/}
            <span className={s.rating} onClick={onClockHandler}>{props.selected ? '★' : " ☆ "}</span>
        </div>
    );
};

