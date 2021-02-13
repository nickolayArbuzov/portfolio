import React, { useState } from 'react';
import blackStar from '../../Assets/Img/blackStar.png';
import lightStar from '../../Assets/Img/lightStar.png';
import s from './Rating.module.css';

type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5
}

function UncontrolledRating() {
  let [value, setValue] = useState(0);
  return (
    <div>
      <Star selected={value > 0}/><button onClick={() => {setValue(1)}} onMouseEnter={() => {setValue(1)}} onMouseLeave={() => {setValue(0)}}>1</button>
      <Star selected={value > 1}/><button onClick={() => {setValue(2)}} onMouseEnter={() => {setValue(2)}} onMouseLeave={() => {setValue(0)}}>2</button>
      <Star selected={value > 2}/><button onClick={() => {setValue(3)}} onMouseEnter={() => {setValue(3)}} onMouseLeave={() => {setValue(0)}}>3</button>
      <Star selected={value > 3}/><button onClick={() => {setValue(4)}} onMouseEnter={() => {setValue(4)}} onMouseLeave={() => {setValue(0)}}>4</button>
      <Star selected={value > 4}/><button onClick={() => {setValue(5)}} onMouseEnter={() => {setValue(5)}} onMouseLeave={() => {setValue(0)}}>5</button>
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
