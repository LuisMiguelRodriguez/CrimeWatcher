import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import { Link, IndexLink } from 'react-router';


const HomePage = () => (
  <div>
    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">Add depth to your crime stories.</h1>
              <h4 className="mb-5">Give us a few basic details and we'll do the leg work. Booking logs, crime statistics, a wealth of information at your fingertips.</h4>
              <Link to="/signlogin" className="btn btn-outline btn-xl js-scroll-trigger">Sign Up Now for Free!</Link >
            </div>
          </div>
          <div className="col-lg-5 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">

                    <img src="img/iPhoneImage.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="button">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2>Features</h2>
          <p className="text-muted">Check out what you can do with this app!</p>
          <hr/>
        </div>
        <div className="row">
          <div className="col-lg-4 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src="img/iPhoneImage.jpg" className="img-fluid" alt=""/>
                  </div>
                  <div className="button">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-magnifier text-primary"></i>
                    <h3>Search</h3>
                    <p className="text-muted">Give us dates and a type of crime, and we'll dig up all the matching data in Miami-Dade County booking logs.</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-book-open text-primary"></i>
                    <h3>Automated Articles</h3>
                    <p className="text-muted">We'll give you these data in paragraph form so you can copy-paste into your articles. No more typos!</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-graph text-primary"></i>
                    <h3>Crime Data</h3>
                    <p className="text-muted">We'll give you pie charts and bar graphs describing crime trends in the date range you can use to illustrate your stories.</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-envelope text-primary"></i>
                    <h3>Email</h3>
                    <p className="text-muted">We can email you the data for safe keeping.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="cta">
      <div className="cta-content">
        <div className="container">
          <h2 id="feature-headline">Stop waiting.<br/>Start watching.</h2>
          <Link to="/signlogin" className="btn btn-outline btn-xl js-scroll-trigger">Let's Get Started!</Link>
        </div>
      </div>
      <div className="overlay"></div>
    </section>

    <section className="contact bg-primary" id="contact">
      <div className="container">
        <h2>We
          <i className="fa fa-heart"></i>
          new friends!</h2>
        <ul className="list-inline list-social">
          <li className="list-inline-item social-twitter">
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className="list-inline-item social-facebook">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li className="list-inline-item social-google-plus">
            <a href="#">
              <i className="fa fa-google-plus"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>

  </div>
);

export default HomePage;
