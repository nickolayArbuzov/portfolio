import React, { useState } from 'react';
import blackStar from '../../Assets/Img/blackStar.png';
import lightStar from '../../Assets/Img/lightStar.png';
import s from './Rating.module.css';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
  fixValue: RatingValueType,
  ratingValue: RatingValueType,
  onClick: (value: RatingValueType) => void,
  onMouseEnter: (value: RatingValueType) => void,
  onMouseLeave: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
  
  return (
    <div>
      <Star selected={props.ratingValue > 0} value={1} fixValue={props.fixValue} ratingValue={props.ratingValue}
            onClick={props.onClick} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}/>
      <Star selected={props.ratingValue > 1} value={2} fixValue={props.fixValue} ratingValue={props.ratingValue}
            onClick={props.onClick} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}/>
      <Star selected={props.ratingValue > 2} value={3} fixValue={props.fixValue} ratingValue={props.ratingValue}
            onClick={props.onClick} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}/>
      <Star selected={props.ratingValue > 3} value={4} fixValue={props.fixValue} ratingValue={props.ratingValue}
            onClick={props.onClick} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}/>
      <Star selected={props.ratingValue > 4} value={5} fixValue={props.fixValue} ratingValue={props.ratingValue}
            onClick={props.onClick} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}/>
    </div>
  )
}

type StarPropsType = {
  selected: boolean,
  onClick: (value: RatingValueType) => void,
  onMouseEnter: (value: RatingValueType) => void,
  onMouseLeave: (value: RatingValueType) => void,
  value: RatingValueType,
  fixValue: RatingValueType,
  ratingValue: RatingValueType
}

function Star(props: StarPropsType) {
  return (
    <span 
      onClick={() => {props.onClick(props.value)}}
      onMouseEnter={() => {props.onMouseEnter(props.value)}}
      onMouseLeave={() => {props.onMouseLeave(props.fixValue)}}
      >
      <img className={s.star} src={(props.selected && lightStar) || blackStar}/>
    </span>
  )
}