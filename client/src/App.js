import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ToolBar from './components/ToolBar';
import Main from './components/Main';
import ChatRadio from './components/ChatRadio';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className='App'>
      <ToolBar />
      <header className='App-header'>
        <h1>ChatRadio</h1>
        <div className='App-container'>
          <Router>
            <Switch>
              <Route exact path='/' component={Main} />
              <Route path='/:roomId' component={ChatRadio} />
            </Switch>
          </Router>
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;
