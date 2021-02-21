import {useReducer, MouseEvent} from 'react';
import s from './RubicksCube.module.css';
import { reducer, ROTATE_CUBE } from './reducer';

type onOffPropsType = {
  onChange: (setUncontrolledToggle: boolean) => void,
  title: string,
  defaultValue?: boolean
}

export function RubicksCube() {

  let [state, dispatch] = useReducer(reducer, {x:0, y:0} );
  const cube = {
    transform: `rotateY(${state.y}deg) rotateX(${state.x}deg)`
  }

  console.log(state.x + ' ' + state.y)

  const onRotate = (e:MouseEvent<HTMLDivElement>) => {
    let beginX = e.clientX;
    let beginY = e.clientY;
    e.target.addEventListener('mousemove', (e:any) => {
        let y = e.clientX - beginX;
        let x = beginY - e.clientY;
        dispatch({type: ROTATE_CUBE, y, x})
    })
  }

  return (
    <div className={s.data} onMouseDown={onRotate}>
        <div>x: {state.x}</div>
        <div>y: {state.y}</div>
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