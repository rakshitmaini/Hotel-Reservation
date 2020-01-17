import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Error from './pages/Error'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/rooms' component={Rooms} />
          <Route exact path='/rooms/:slug' component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;