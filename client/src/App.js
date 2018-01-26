import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from './store/actions/auth';

import WelcomePage from './components/WelcomePage/WelcomePage';
import Header from './components/Header/Header';
import Aux from './hoc/Auxx/Auxx';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    let routes = (
      <Aux>
        <Header authenticatedUser={this.props.authenticatedUser}/>
        <Switch>
          <Route path='/' exact component={WelcomePage} />
        </Switch>
      </Aux>
    );
    return (
      <div>
        {routes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticatedUser: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
