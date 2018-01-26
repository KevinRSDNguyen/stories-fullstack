import React from 'react';
import Aux from './../../hoc/Auxx/Auxx';

const Header = ({ authenticatedUser }) => {
  let userOptions = (
    <li><a href="/stories"><i className="fa fa-book"></i> Public Stories</a></li>
  );
  if (authenticatedUser) {
    userOptions = (
      <Aux>
        <li><a href="/dashboard">Welcome {authenticatedUser.firstName}</a></li>
        <li><a href="/stories"><i className="fa fa-book"></i> Public Stories</a></li>
        <li>
          <a href="/api/logout"><i className="fa fa-sign-out"></i>Logout</a>
        </li>
      </Aux>
    );
  }
  return (
    <nav className="grey darken-3">
      <div className="container">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo left">Stories Fullstack</a>
          <ul className="right hide-on-small-only">
            {userOptions}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;