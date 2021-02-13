import React from 'react';
import blackStar from '../../Assets/Img/blackStar.png';
import lightStar from '../../Assets/Img/lightStar.png';
import s from './Rating.module.css';

function Rating(props: any) {
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

function Star(props: any) {
  return (
    <span>
      <img className={s.star} src={(props.selected && lightStar) || blackStar}/>
    </span>
  )
}

export default Rating;
