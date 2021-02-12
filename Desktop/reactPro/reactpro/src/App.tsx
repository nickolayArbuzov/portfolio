import React from 'react';
import s from './App.module.css';
import blackStar from './Assets/Img/blackStar.png';
import lightStar from './Assets/Img/lightStar.png';

function App() {
  return (
    <div className={s.App}>
      <Rating />
      <Accordeon />
    </div>
  );
}

function Rating() {
  return (
    <div>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  )
}

function Accordeon() {
  return (
    <div>
      <h3>menu</h3>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}

function Star() {
  return (
    <div>
      <img className={s.star} src={lightStar}/>
    </div>
  )
}

export default App;
