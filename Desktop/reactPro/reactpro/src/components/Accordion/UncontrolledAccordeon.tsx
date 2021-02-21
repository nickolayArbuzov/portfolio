import React, { useReducer } from 'react';
import s from './Accordeon.module.css';
import { reducer, TOGGLE_COLLAPSED } from './reducer';

type UncontrolledAccordeonPropsType = {
  title: string,
}

export function UncontrolledAccordeon(props: UncontrolledAccordeonPropsType) {
  console.log('uncontrolledAcc render')
  let [state, dispatch] = useReducer(reducer, { collapsed: false });

  return (
    <div>
      <UncontrolledAccordeonTitle onSetCollapsed={() => {dispatch({type: TOGGLE_COLLAPSED})}} title={props.title}/> 
      {!state.collapsed && <UncontrolledAccordeonBody />}
    </div>
  )
}

type UncontrolledAccordeonTitlePropsType = {
  title: string,
  onSetCollapsed: () => void
}

function UncontrolledAccordeonTitle(props: UncontrolledAccordeonTitlePropsType) {
  console.log('uncontrolledAccTitle render')
  return (
    <div>
      <h3 className={s.title} onClick={props.onSetCollapsed}>{props.title}</h3>
    </div>
  )
}

function UncontrolledAccordeonBody() {
  console.log('uncontrolledAccBody render')
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}
