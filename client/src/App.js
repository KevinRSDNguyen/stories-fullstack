import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import WelcomePage from './components/WelcomePage/WelcomePage';
import './App.css';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path='/' exact component={WelcomePage} />
      </Switch>
    );
    return (
      <div className="container">
        {routes}
      </div>
    );
  }
}

export default App;
