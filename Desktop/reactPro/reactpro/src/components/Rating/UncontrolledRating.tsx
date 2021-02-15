import React, { useState } from 'react';
import blackStar from '../../Assets/Img/blackStar.png';
import lightStar from '../../Assets/Img/lightStar.png';
import s from './Rating.module.css';

type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5
}

function UncontrolledRating() {
  let [value, setValue] = useState(0);
  let [fixValue, setFixValue] = useState(0);
  
  return (
    <div>
      <Star selected={value > 0} value={1} fixValue={fixValue} setValue={setValue} setFixValue={setFixValue}/>
      <Star selected={value > 1} value={2} fixValue={fixValue} setValue={setValue} setFixValue={setFixValue}/>
      <Star selected={value > 2} value={3} fixValue={fixValue} setValue={setValue} setFixValue={setFixValue}/>
      <Star selected={value > 3} value={4} fixValue={fixValue} setValue={setValue} setFixValue={setFixValue}/>
      <Star selected={value > 4} value={5} fixValue={fixValue} setValue={setValue} setFixValue={setFixValue}/>
    </div>
  )
}

type StarPropsType = {
  selected: boolean,
  setValue: (value: number) => void,
  setFixValue: (value: 1 | 2 | 3 | 4 | 5) => void,
  value: 1 | 2 | 3 | 4 | 5,
  fixValue: number
}

function Star(props: StarPropsType) {
  const onChooseRating = () => {
    props.setFixValue(props.value)
  }
  const onHoveredRating = () => {
    props.setValue(props.value)
  }
  const onDishoveredRating = () => {
    props.setValue(props.fixValue)
  }
  return (
    <span 
      onClick={onChooseRating}
      onMouseEnter={onHoveredRating}
      onMouseLeave={onDishoveredRating}
      >
      <img className={s.star} src={(props.selected && lightStar) || blackStar}/>
    </span>
  )
}

export default UncontrolledRating;
