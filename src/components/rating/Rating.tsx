import React, {useState} from "react";
import s from "./Rating.module.css";

type RatingType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}

export const Rating = (props: RatingType) => {

    let [rating, setRating] = useState(0);



    return (
        <div className={s.rating}>
            {/*заменили все if на укороченную запись*/}
            <Star selected={rating > 0}/><button onClick={()=>setRating(rating =1)} >1</button>
            <Star selected={rating > 1}/><button onClick={()=>setRating(rating=2)}>2</button>
            <Star selected={rating > 2}/><button onClick={()=>setRating(rating=3)}>3</button>
            <Star selected={rating > 3}/><button onClick={()=>setRating(rating=4)}>4</button>
            <Star selected={rating > 4}/><button onClick={()=>setRating(rating=5)}>5</button>
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

