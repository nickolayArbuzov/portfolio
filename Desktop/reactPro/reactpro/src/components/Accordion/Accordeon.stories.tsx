import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Accordeon } from './Accordeon';

export default {
    title: 'Accordeon',
    component: Accordeon,
}

const callback = action('some item was clicked');

export const CollapsedAccordeon = () => <Accordeon onClick={a=>a} title={'accordeonName'} onItemClick={callback} collapsed={true} items={[{title:'Nick', value:1}, {title:'Olya', value:2}, {title:'Anatoly', value:3}]}/> ;
export const UncollapsedAccordeon = () => <Accordeon onClick={a=>a} title={'accordeonName'} onItemClick={callback} collapsed={false} items={[{title:'Nick', value:1}, {title:'Olya', value:2}, {title:'Anatoly', value:3}]}/> ;
export const AccordeonCollapsing = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <Accordeon title={'accordeonName'} onClick={setCollapsed} onItemClick={(value) => {alert(`userID ${value} clicked`)}} collapsed={collapsed} items={[{title:'Nick', value:1}, {title:'Olya', value:2}, {title:'Anatoly', value:3}]}/> ;
}