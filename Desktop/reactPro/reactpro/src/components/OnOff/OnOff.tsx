import React, {useState} from 'react';

type onOffPropsType = {
  onClick: (toggle: boolean) => void,
  toggle: boolean
}

function OnOff(props: onOffPropsType) {

  const onStyle = {
    width: '50px',
    height: '20px',
    backgroundColor: (props.toggle && 'green') || '',
    border: '1px solid black',
    display: 'inline-block',
    padding: '2px',
    cursor: 'pointer'
  }

  const offStyle = {
    width: '50px',
    height: '20px',
    backgroundColor: (!props.toggle && 'red') || '',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '2px',
    padding: '2px',
    cursor: 'pointer'
  }

  const indicatorStyle = {
    width: '10px',
    height: '10px',
    backgroundColor: (props.toggle && 'green') || 'red',
    borderRadius: '5px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '5px'
  }

  return (
    <div>
      <div style={onStyle} onClick={() => {props.onClick(true)}}>On</div>
      <div style={offStyle} onClick={() => {props.onClick(false)}}>Off</div>
      <div style={indicatorStyle}></div>
    </div>
  )
}

export default OnOff;
