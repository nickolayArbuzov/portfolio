import React from 'react';

function Accordeon(props: any) {
  return (
    <div>
      <AccordeonTitle title={props.title}/>
      <AccordeonBody />
    </div>
  )
}

function AccordeonTitle(props: any) {
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
