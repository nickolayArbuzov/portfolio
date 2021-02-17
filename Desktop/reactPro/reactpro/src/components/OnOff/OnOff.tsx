import s from './OnOff.module.css'

type onOffPropsType = {
  onClick: (toggle: boolean) => void,
  toggle: boolean
}

export function OnOff(props: onOffPropsType) {

  const onStyle = {
    width: '50px',
    height: '20px',
    backgroundColor: (props.toggle && 'green') || '',
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
    backgroundColor: (!props.toggle && 'red') || '',
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
    backgroundColor: (props.toggle && 'green') || 'red',
    borderRadius: '5px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '5px'
  }

  const onClicked = () => {
    props.onClick(true);
  }
  const offClicked = () => {
    props.onClick(false)
  }

  return (
    <div>
      <div className={s.on} style={onStyle} onClick={onClicked}>On</div>
      <div className={s.off} style={offStyle} onClick={offClicked}>Off</div>
      <div style={indicatorStyle}></div>
    </div>
  )
}
