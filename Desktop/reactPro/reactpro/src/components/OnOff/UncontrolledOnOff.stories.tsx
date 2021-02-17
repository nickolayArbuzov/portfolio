import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { UncontrolledOnOff } from './UncontrolledOnOff';

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}

const callback = action('clicked');

export const On = () => <UncontrolledOnOff onChange={callback} title={'title'} defaultValue={true}/>;
export const Off = () => <UncontrolledOnOff onChange={callback} title={'title'} defaultValue={false}/>;

export const OnOffSetting = () => {
    const [unControlledtoggle, setUncontrolledToggle] = useState(false)
    return <UncontrolledOnOff onChange={setUncontrolledToggle} title={unControlledtoggle.toString()}/>
}