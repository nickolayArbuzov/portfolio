import React from 'react';
import s from './App.module.css';
import Accordeon from './components/Accordion/Accordeon';
import Rating from './components/Rating/Rating';

function App() {
  return (
    <div className={s.App}>
      <AppTitle />
      <Rating value={4}/>
      <Accordeon title={'my toDos'}/>
      <Rating value={3}/>
      <Accordeon title={'my purchases'}/>
    </div>
  );
}

function AppTitle(){
  return <>App</>
}

export default App;
