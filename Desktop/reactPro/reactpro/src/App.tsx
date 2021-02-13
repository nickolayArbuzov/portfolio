import React from 'react';
import s from './App.module.css';
import UncontrolledAccordeon from './components/Accordion/Accordeon';
import UncontrolledRating from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';

function App() {
  return (
    <div className={s.App}>
      <AppTitle />
      <UncontrolledRating />
      <UncontrolledAccordeon title={'my toDos'} />
      <UncontrolledRating />
      <UncontrolledAccordeon title={'my purchases'} />
      <OnOff />
      <OnOff />
    </div>
  );
}

function AppTitle(){
  return <>App</>
}

export default App;
