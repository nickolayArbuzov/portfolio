import React from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Skills from './Skills/Skills';
import Works from './Works/Works';
import Slogan from './Slogan/Slogan';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Works/>
      <Slogan/>
    </div>
  );
}

export default App;
