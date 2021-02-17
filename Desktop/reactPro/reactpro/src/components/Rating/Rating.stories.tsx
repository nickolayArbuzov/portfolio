import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Rating, RatingValueType } from './Rating';

export default {
    title: 'Rating',
    component: Rating,
}

const callback = [action('clicked'), action('hovered'), action('unhovered')]

export const EmptyRating = () => <Rating fixValue={0} ratingValue={0} 
                                    onClick={callback[0]} 
                                    onMouseEnter={callback[1]} 
                                    onMouseLeave={callback[2]}/>;
export const ChoosedRating1 = () => <Rating fixValue={1} ratingValue={1} 
                                    onClick={callback[0]} 
                                    onMouseEnter={callback[1]} 
                                    onMouseLeave={callback[2]}/>;
export const ChoosedRating2 = () => <Rating fixValue={2} ratingValue={2} 
                                    onClick={callback[0]} 
                                    onMouseEnter={callback[1]} 
                                    onMouseLeave={callback[2]}/>;
export const ChoosedRating3 = () => <Rating fixValue={3} ratingValue={3} 
                                    onClick={callback[0]} 
                                    onMouseEnter={callback[1]} 
                                    onMouseLeave={callback[2]}/>;        
export const ChoosedRating4 = () => <Rating fixValue={4} ratingValue={4} 
                                    onClick={callback[0]} 
                                    onMouseEnter={callback[1]} 
                                    onMouseLeave={callback[2]}/>; 
export const ChoosedRating5 = () => <Rating fixValue={5} ratingValue={5} 
                                    onClick={callback[0]} 
                                    onMouseEnter={callback[1]} 
                                    onMouseLeave={callback[2]}/>; 
export const RatingChanging = () => {
    const [ratingChoosed, setRating] = useState<RatingValueType>(5)
    const [ratingHovered, setHoverRating] = useState<RatingValueType>(5)
    return <Rating fixValue={ratingChoosed} ratingValue={ratingHovered} 
            onClick={setRating} onMouseEnter={setHoverRating} onMouseLeave={setHoverRating}/>
}