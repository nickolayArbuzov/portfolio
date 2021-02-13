import React from 'react';
import blackStar from '../../Assets/Img/blackStar.png';
import lightStar from '../../Assets/Img/lightStar.png';
import s from './Rating.module.css';

type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5
}

function Rating(props: RatingPropsType) {
  return (
    <div>
      <Star selected={props.value > 0} />
      <Star selected={props.value > 1}/>
      <Star selected={props.value > 2}/>
      <Star selected={props.value > 3}/>
      <Star selected={props.value > 4}/>
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

export default Rating;
