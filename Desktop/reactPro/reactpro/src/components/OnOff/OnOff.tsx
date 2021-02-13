import React from 'react';
import s from './OnOff.module.css';

function OnOff(props: any) {
  return (
    <div>
      <span className={props.value && s.on}>On</span>
      <span className={props.value || s.off}>Off</span>
      <span className={props.value && s.on || s.off}>0</span>
    </div>
  )
}

export default OnOff;
