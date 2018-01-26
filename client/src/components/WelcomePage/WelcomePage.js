import React from 'react';

const WelcomePage = (props) => {
  return (
    <div className="container">
      <h1>Welcome</h1>
      <p>Welcome to Storybooks 1.0.0</p>
      <p>Post stories from the best and worst times of your life
  and choose for them to be read by the world or completely
  private as your own personal diary.
    </p>
      <a className="btn red darken-1" href="/auth/google"><i className="fa fa-google left">
      </i>Login with Google</a>
    </div>
  );
};

export default WelcomePage;