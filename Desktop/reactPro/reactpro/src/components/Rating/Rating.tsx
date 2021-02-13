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
  const onSetFixValue = () => {
    
  }
  return (
    <div>
      <Star selected={value > 0}/>
        <button onClick={() => {setFixValue(1)}} 
                onMouseEnter={() => {setValue(1)}} 
                onMouseLeave={() => {setValue(fixValue)}}>1</button>
      <Star selected={value > 1}/>
        <button onClick={() => {setFixValue(2)}} 
                onMouseEnter={() => {setValue(2)}} 
                onMouseLeave={() => {setValue(fixValue)}}>2</button>
      <Star selected={value > 2}/>
        <button onClick={() => {setFixValue(3)}} 
                onMouseEnter={() => {setValue(3)}} 
                onMouseLeave={() => {setValue(fixValue)}}>3</button>
      <Star selected={value > 3}/>
        <button onClick={() => {setFixValue(4)}} 
                onMouseEnter={() => {setValue(4)}} 
                onMouseLeave={() => {setValue(fixValue)}}>4</button>
      <Star selected={value > 4}/>
        <button onClick={() => {setFixValue(5)}} 
                onMouseEnter={() => {setValue(5)}} 
                onMouseLeave={() => {setValue(fixValue)}}>5</button>
    </div>
  )
}

type StarPropsType = {
  selected: boolean
}

function Star(props: StarPropsType) {
  return (
    <span>
      <img className={s.star} src={(props.selected && lightStar) || blackStar}/>
    </span>
  )
}

export default UncontrolledRating;
