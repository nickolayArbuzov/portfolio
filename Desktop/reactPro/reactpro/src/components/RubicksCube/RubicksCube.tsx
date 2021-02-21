import {useState, MouseEvent} from 'react';
import s from './RubicksCube.module.css';

type onOffPropsType = {
  onChange: (setUncontrolledToggle: boolean) => void,
  title: string,
  defaultValue?: boolean
}

export function RubicksCube() {
  let [x, setx] = useState(0);
  let [y, sety] = useState(0);
  let [z, setz] = useState(0);

  const cube = {
    transform: `rotateY(${y}deg) rotateX(${x}deg)`
  }

  const onRotate = (e:MouseEvent<HTMLDivElement>) => {
    let beginX = e.clientX;
    let beginY = e.clientY;
    e.target.addEventListener('mousemove', (e:any) => {
        sety((e.clientX - beginX));
        setx((beginY - e.clientY));
    })
  }

  return (
    <div className={s.data} onMouseDown={onRotate}>
        <div>x: {x}</div>
        <div>y: {y}</div>
        <div className={s.container} >
            <div className={s.cube} style={cube}>
                <div className={s.side + ' ' + s.front}>front</div>
                <div className={s.side + ' ' + s.back}>back</div>
                <div className={s.side + ' ' + s.right}>right</div>
                <div className={s.side + ' ' + s.left}>left</div>
                <div className={s.side + ' ' + s.top}>top</div>
                <div className={s.side + ' ' + s.bottom}>bottom</div>
            </div>
            <div className={s.over}></div>
        </div>
    </div>
  )
}