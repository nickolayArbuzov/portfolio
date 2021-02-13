import React from 'react';
import s from './App.module.css';
import Accordeon from './components/Accordion/Accordeon';
import Rating from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';

function App() {
  return (
    <div className={s.App}>
      <AppTitle />
      <Rating value={0}/>
      <Accordeon title={'my toDos'} collapsed={true}/>
      <Rating value={3}/>
      <Accordeon title={'my purchases'} collapsed={true}/>
      <OnOff value={true}/>
      <OnOff value={false}/>
    </div>
  );
}

function AppTitle(){
  return <>App</>
}

export default App;
