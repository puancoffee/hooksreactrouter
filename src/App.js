import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Article from './pages/Article'
import Detail from './pages/Detail'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/article' component={Article} />
        <Route exact path='/article/:id' component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
