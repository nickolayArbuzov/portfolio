import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { UncontrolledAccordeon } from './UncontrolledAccordeon';

export default {
    title: 'UncontrolledAccordeon',
    component: UncontrolledAccordeon,
}

const callback = action('clicked');

export const AccordeonUncontrolledCollapsing = () => {
    return <UncontrolledAccordeon title={'accordeonName'} /> ;
}