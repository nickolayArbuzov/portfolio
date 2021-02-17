import React, { useState } from 'react';
import s from './Accordeon.module.css';

type UncontrolledAccordeonPropsType = {
  title: string,
}

export function UncontrolledAccordeon(props: UncontrolledAccordeonPropsType) {

  let [collapsed, setCollapsed] = useState(false);

  const onSetCollapsed = () => {
    setCollapsed(!collapsed);
  }

  return (
    <div>
      <UncontrolledAccordeonTitle onSetCollapsed={onSetCollapsed} title={props.title}/> 
      {collapsed && <UncontrolledAccordeonBody />}
    </div>
  )
}

type UncontrolledAccordeonTitlePropsType = {
  title: string,
  onSetCollapsed: () => void
}

function UncontrolledAccordeonTitle(props: UncontrolledAccordeonTitlePropsType) {
  return (
    <div>
      <h3 className={s.title} onClick={props.onSetCollapsed}>{props.title}</h3>
    </div>
  )
}

function UncontrolledAccordeonBody() {
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
