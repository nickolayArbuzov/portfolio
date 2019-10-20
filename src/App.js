import React from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Skills from './Skills/Skills';
import Works from './Works/Works';
import Slogan from './Slogan/Slogan';
import Contacts from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Works/>
      <Slogan/>
      <Contacts/>
    </div>
  );
}

export default App;
