import React from 'react';

import ToolBar from './components/ToolBar';
import Player from './components/Player';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className='App'>
      <ToolBar />
      <header className='App-header'>
        <h1>ChatRadio</h1>
        <div className='App-container'>
          <Player />
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;
