import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Nav } from './components/nav/Nav';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className="wrapper">
        <div className="Nav">
          <Nav />
        </div>
        <div className="Main">
          <Main />
        </div>
      </div>
    </div>
  )
}



export default App;
