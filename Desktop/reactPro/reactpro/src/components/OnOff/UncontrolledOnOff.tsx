import React, {useState} from 'react';

function UncontrolledOnOff() {

  let [toggle, setToggle] = useState(false)

  const onStyle = {
    width: '50px',
    height: '20px',
    backgroundColor: (toggle && 'green') || '',
    border: '1px solid black',
    display: 'inline-block',
    padding: '2px',
    cursor: 'pointer'
  }

  const offStyle = {
    width: '50px',
    height: '20px',
    backgroundColor: (!toggle && 'red') || '',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '2px',
    padding: '2px',
    cursor: 'pointer'
  }

  const indicatorStyle = {
    width: '10px',
    height: '10px',
    backgroundColor: (toggle && 'green') || 'red',
    borderRadius: '5px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '5px'
  }

  return (
    <div>
      <div style={onStyle} onClick={() => {setToggle(true)}}>On</div>
      <div style={offStyle} onClick={() => {setToggle(false)}}>Off</div>
      <div style={indicatorStyle}></div>
    </div>
  )
}

export default UncontrolledOnOff;
