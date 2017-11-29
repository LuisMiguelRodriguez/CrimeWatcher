import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';


const HomePage = () => (
  <div>
    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">Crime Watcher is an app that will help users consume crime data in bite size pieces</h1>
              <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Sign Up Now for Free!</a>
            </div>
          </div>
          <div className="col-lg-5 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">

                    <img src="img/demo-screen-1.jpg" className="img-fluid" alt="" />
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

    <section className="download bg-primary text-center" id="download">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-heading">Discover what all the buzz is about!</h2>
            <p>Our app is available on any mobile device! Download now to get started!</p>
            <div className="badges">
              <a className="badge-link" href="#"><img src="img/app-store-badge.svg" alt=""/></a>
            </div>
          </div>
        </div>
      </div>
    </section>

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
                    <img src="img/demo-screen-1.jpg" className="img-fluid" alt=""/>
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
                    <p className="text-muted">Ready to use HTML/CSS device mockups, no Photoshop required!</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-book-open text-primary"></i>
                    <h3>Automated Articles</h3>
                    <p className="text-muted">Put an image, video, animation, or anything else in the screen!</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-graph text-primary"></i>
                    <h3>Crime Data</h3>
                    <p className="text-muted">As always, this theme is free to download and use for any purpose!</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-layers text-primary"></i>
                    <h3>Heat Map</h3>
                    <p className="text-muted">Since this theme is MIT licensed, you can use it commercially!</p>
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
          <h2>Stop waiting.<br/>Start Watching.</h2>
          <a href="#contact" className="btn btn-outline btn-xl js-scroll-trigger">Let's Get Started!</a>
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
