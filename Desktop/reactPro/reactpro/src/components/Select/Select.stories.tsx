import React, { useState, useRef, ChangeEvent } from 'react';
import { action } from '@storybook/addon-actions';
import { Select } from './Select'

export default {
  title: 'select',
  component: Select
};

export const WithValue = () => {
    const [value, setValue] = useState('3')
    return <>
        <Select onChange={setValue} 
            value={value}
            items={[
                {title:'Nick', value:'1'}, 
                {title:'Olya', value:'2'}, 
                {title:'Anatoly', value:'3'}
            ]}
        /> 
    </>
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null);
    return <>
        <Select onChange={setValue}
            value={value}
            items={[
                {title:'Nick', value:1}, 
                {title:'Olya', value:2}, 
                {title:'Anatoly', value:3}
            ]}
        /> 
    </>
}