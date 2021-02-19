import React from 'react';
import s from './Accordeon.module.css';

type ItemType = {
  title: string,
  value: any
}

type AccordeonPropsType = {
  title: string,
  onClick: (collapsed: boolean) => void,
  collapsed: boolean,
  items: ItemType[],
  onItemClick: (value: any) => void
}

export function Accordeon(props: AccordeonPropsType) {

  return (
    <div>
      <AccordeonTitle onClick={props.onClick} title={props.title} collapsed={props.collapsed}/> 
      {props.collapsed && <AccordeonBody items={props.items} onItemClick={props.onItemClick}/>}
    </div>
  )
}

type AccordeonTitlePropsType = {
  title: string,
  onClick: (collapsed: boolean) => void,
  collapsed: boolean
}

function AccordeonTitle(props: AccordeonTitlePropsType) {
  
  const onCollapsed = () => {
    props.onClick(!props.collapsed);
  }

  return (
    <div>
      <h3 className={s.title} onClick={onCollapsed}>{props.title}</h3>
    </div>
  )
}

type AccordeonBodyPropsType = {
  items: ItemType[],
  onItemClick: (value: any) => void
}

function AccordeonBody(props: AccordeonBodyPropsType) {
  return (
    <div>
      <ul>
        {props.items.map((i,index) => <li onClick={() => {props.onItemClick(i.value)}} key={index}>{i.title}</li>)}
      </ul>
    </div>
  )
}
