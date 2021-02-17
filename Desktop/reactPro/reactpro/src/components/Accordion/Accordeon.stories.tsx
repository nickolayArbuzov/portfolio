import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Accordeon } from './Accordeon';

export default {
    title: 'Accordeon',
    component: Accordeon,
}

const callback = action('clicked');

export const CollapsedAccordeon = () => <Accordeon title={'accordeonName'} onClick={callback} collapsed={true} /> ;
export const UncollapsedAccordeon = () => <Accordeon title={'accordeonName'} onClick={callback} collapsed={false} /> ;
export const AccordeonCollapsing = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <Accordeon title={'accordeonName'} onClick={setCollapsed} collapsed={collapsed} /> ;
}