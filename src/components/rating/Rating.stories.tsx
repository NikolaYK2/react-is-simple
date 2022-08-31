import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Rating} from "./Rating";
import {ratingType} from "../../App";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Rating stories',
    component: Rating,
} as ComponentMeta<typeof  Rating>;

const setRating = action( 'num star')
const Template: ComponentStory<typeof Rating> = (args)=> {
    let [rating, setRating] = useState<ratingType>(0);
    return (
        <Rating {...args} setRating={setRating} rating={rating}/>
    )
}

export const RatingStars = Template.bind({});
RatingStars.args={
    rating: 0,
    setRating: ()=>{},
}
