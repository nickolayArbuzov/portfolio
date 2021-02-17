import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { OnOff } from './OnOff';

export default {
    title: 'OnOff',
    component: OnOff,
}

const callback = action('clicked');

export const On = () => <OnOff onClick={callback} toggle={true} />;
export const Off = () => <OnOff onClick={callback} toggle={false} />;
export const OnOffSetting = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    return <OnOff onClick={setToggle} toggle={toggle}/>
}