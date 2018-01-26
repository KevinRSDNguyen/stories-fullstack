import React from 'react';
import Aux from './../../hoc/Auxx/Auxx';

const WelcomePage = (props) => {
  return (
    <Aux>
      <h1>Welcome</h1>
      <p>Welcome to Storybooks 1.0.0</p>
      <p>Post stories from the best and worst times of your life
  and choose for them to be read by the world or completely
  private as your own personal diary.
    </p>
      <a className="btn red darken-1" href="/auth/google"><i className="fa fa-google left">
      </i>Login with Google</a>
    </Aux>
  );
};

export default WelcomePage;