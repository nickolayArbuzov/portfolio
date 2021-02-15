import {useState} from 'react';
import s from './OnOff.module.css'

type onOffPropsType = {
  onChange: (setUncontrolledToggle: boolean) => void
}

function UncontrolledOnOff(props: onOffPropsType) {

  let [toggle, setToggle] = useState(false)

  const onStyle = {
    width: '50px',
    height: '20px',
    backgroundColor: (toggle && 'green') || '',
    border: '1px solid black',
    display: 'inline-block',
    padding: '2px',
    cursor: 'pointer',
    transitionProperty: 'background-color',
    transitionDuration: '.5s'
  }

  const offStyle = {
    width: '50px',
    height: '20px',
    backgroundColor: (!toggle && 'red') || '',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '2px',
    padding: '2px',
    cursor: 'pointer',
    transitionProperty: 'background-color',
    transitionDuration: '.5s'
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

  const onClicked = () => {
    setToggle(true);
    props.onChange(true);
  }
  const offClicked = () => {
    setToggle(false);
    props.onChange(false);
  }

  return (
    <div>
      <div className={s.on} style={onStyle} onClick={onClicked}>On</div>
      <div className={s.off} style={offStyle} onClick={offClicked}>Off</div>
      <div style={indicatorStyle}></div>
    </div>
  )
}

export default UncontrolledOnOff;
