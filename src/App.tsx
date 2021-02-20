import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Board from './pages/Board/components/Board/Board';
import Home from './pages/Home/components/Home/Home';

import './App.css';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/board/:id" render={(props) => <Board {...props.match.params} />} />
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
