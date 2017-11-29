import React from "react";

const Nav = () =>
<nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
  <div className="container">
    <a className="navbar-brand js-scroll-trigger" href="#page-top">Crime Watcher</a>
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      Menu
      <i className="fa fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#download">Download</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#features">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#Signup">Login/SignUp</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


export default Nav;
