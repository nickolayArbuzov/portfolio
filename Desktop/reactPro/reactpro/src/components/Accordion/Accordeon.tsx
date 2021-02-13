import React, { useState } from 'react';

type UncontrolledAccordeonPropsType = {
  title: string,
}

function UncontrolledAccordeon(props: UncontrolledAccordeonPropsType) {

  let [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <UncontrolledAccordeonTitle title={props.title}/> <button onClick={() => {setCollapsed(!collapsed)}}>TOGGLE</button>
      {collapsed && <UncontrolledAccordeonBody />}
    </div>
  )
}

type UncontrolledAccordeonTitlePropsType = {
  title: string
}

function UncontrolledAccordeonTitle(props: UncontrolledAccordeonTitlePropsType) {
  return (
    <div>
      <h3>{props.title}</h3>
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
