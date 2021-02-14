import React, { useState } from 'react';

type UncontrolledAccordeonPropsType = {
  title: string,
}

function UncontrolledAccordeon(props: UncontrolledAccordeonPropsType) {

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
      <h3 onClick={props.onSetCollapsed}>{props.title}</h3>
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

export default UncontrolledAccordeon;
