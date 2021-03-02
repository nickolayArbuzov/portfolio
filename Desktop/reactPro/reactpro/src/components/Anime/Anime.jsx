import s from './Anime.module.css';
import anime from 'animejs/lib/anime.es.js';
import {useState} from 'react';

export function Anime() {
  let [color, setColor] = useState('transparent');
  let [dash, setDash] = useState(2600);
  const On = () => {
    setColor('yellow');
    anime({
      targets: 'path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 3000,
      autoplay: true,
    });
  }
  const Off = () => {
    setColor('transparent');
    anime({
      targets: 'path',
      autoplay: false,
    });
  }

  return (
        <div className={s.ring} onMouseEnter={On}
                                onMouseLeave={Off}>
            <div className={s.wrap}>
                <svg viewBox="0 0 340 333" className={s.svg}>
                    <path  fill="transparent" stroke={color} strokeWidth="20" strokeDashoffset={dash}
                    d="M 10 10 L 100 200 L 30 10 L 120 200 L 50 10 L 140 200 L 70 10 L 160 200 L 90 10 L 180 200
                    L 110 10 L 200 200 L 130 10 L 220 200 "/>
                </svg>
            </div>
        </div>
  )
}