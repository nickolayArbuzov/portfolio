import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { UncontrolledRating, RatingValueType } from './UncontrolledRating';

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
}

const callback = [action('clicked'), action('hovered'), action('unhovered')]

export const EmptyRating = () => <UncontrolledRating defaultValue={0}/>;
export const ChoosedRating1 = () => <UncontrolledRating defaultValue={1}/>;
export const ChoosedRating2 = () => <UncontrolledRating defaultValue={2}/>;
export const ChoosedRating3 = () => <UncontrolledRating defaultValue={3}/>;        
export const ChoosedRating4 = () => <UncontrolledRating defaultValue={4}/>; 
export const ChoosedRating5 = () => <UncontrolledRating defaultValue={5}/>; 
export const RatingChanging = () => {
    return <UncontrolledRating />
}