import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ToolBar from './components/ToolBar';
import Player from './components/Player';
import ChatRadio from './components/ChatRadio';
import Footer from './components/Footer';

import './App.css';
// import 'index.css';

function App() {
  return (
    <div className='App'>
      <ToolBar />
      <header className='App-header'>
        <h1>ChatRadio</h1>
        <div className='App-container'>
          <Router>
            <Switch>
              <Route exact path='/' component={Player} />
              <Route exact path='/:roomId' component={ChatRadio} />
            </Switch>
          </Router>
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;
