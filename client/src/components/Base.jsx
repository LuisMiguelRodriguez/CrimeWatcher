import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';


const Base = ({ children }) => (
  <div>

    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div className="container">
        <IndexLink className="navbar-brand js-scroll-trigger" to="/">Crime Watcher</IndexLink>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">


            {Auth.isUserAuthenticated() ? (

              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/analytics">Analytics</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/logout">Logout</Link>
                </li>
              </ul>

            ) : (



              <ul className="navbar-nav ml-auto">
                <li className="nav-item">

                  <a className="nav-link js-scroll-trigger" href="#features">Features</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/signlogin">Sign Up/ Login</Link>
                </li>
              </ul>

            )}


          </ul>
        </div>
      </div>
    </nav>

    <div>
      { /* child component will be rendered here */ }

      {children}

    </div>
  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
