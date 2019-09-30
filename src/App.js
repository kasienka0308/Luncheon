import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Registration from './Registration/Registration';
import Result from './Result/Result';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Result">
            <Result></Result>
          </Route>
          <Route path="/">
            <Registration></Registration>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
