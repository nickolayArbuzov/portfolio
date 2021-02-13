import React from 'react';

type AccordeonPropsType = {
  title: string,
  collapsed: boolean
}

function Accordeon(props: AccordeonPropsType) {
  return (
    <div>
      <AccordeonTitle title={props.title}/>
      {!props.collapsed && <AccordeonBody />}
    </div>
  )
}

type AccordeonTitlePropsType = {
  title: string
}

function AccordeonTitle(props: AccordeonTitlePropsType) {
  debugger
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  )
}

function AccordeonBody() {
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

export default Accordeon;
