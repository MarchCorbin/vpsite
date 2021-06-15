import React from 'react'
import {HashRouter, Route} from 'react-router-dom'

import './App.css';
import HomePage from './components/homepage/HomePage'
import ContactScreen from './components/ContactScreen/ContactScreen'
import MusicScreen from './components/screens/musicScreen/MusicScreen';

function App() {
  return (
    <HashRouter>
      <Route exact path='/contactscreen' component={ContactScreen} />
      <Route exact path='/musicscreen' component={MusicScreen} />
      <Route exact path='/' component={HomePage} />
    </HashRouter>
    // <HomePage />
    // <ContactScreen />
  );
}

export default App;
