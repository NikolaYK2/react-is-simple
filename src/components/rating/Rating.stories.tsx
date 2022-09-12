import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Rating} from "./Rating";
import {ratingType} from "../../App";
import {action} from "@storybook/addon-actions";

export default {
    title: 'components/Rating',
    component: Rating,
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => {
    let [rating, setRating] = useState<ratingType>(0);
    return (
        <Rating {...args} setRating={setRating} rating={rating}/>
    )
}

export const RatingStarsChange = Template.bind({});
RatingStarsChange.args = {
    rating: 0,
    setRating: () => {},
}

const setRating = action('star num')
const Template1: ComponentStory<typeof Rating> = (args) => <Rating {...args}/>;

export const RatingStarsControl = Template1.bind({});
RatingStarsControl.args = {
    rating: 0,
    setRating: setRating,
}