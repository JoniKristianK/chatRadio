import React from 'react';

import StationList from './components/StationList';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>chatRadio</h1>
        <StationList />
      </header>
    </div>
  );
}

export default App;
