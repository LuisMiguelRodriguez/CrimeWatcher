import React from 'react';

const AboutPage = () => (

  <div>
    <div className="container-fluid">
      <div id="jumbo">
          <h1 className="headline">About Us</h1>
      </div>
    </div>


    <div className="container">
      <div className="row">

        <div className="col-xs-12 col-md-4">

          <h2>What Foo Design Studio Offer</h2>

        </div>

        <div className="col-xs-12 col-md-4 col-md-offset-2">
          <div id="aboutUs">
            <p>Foo Design Studios set out to change the way custom t-shirts are done. Our goal was to make it easier, faster, and more convenient than ever to get quality custom apparel printed and delivered direct to our customers. Giving our artistic customers
              full creative control.With our newest interactive design studio, we think we've made it easier than ever to create custom t-shirts. No visit to the print shop required. Just a t-shirt design studio at your fingertips, 24/7.
            </p>
          </div>


        </div>
      </div>

      <br/><br/>
      <h1>Meet the Foos</h1>
      <hr/>



      <div className="row" id="square">
        <div className="col-md-2">
          <div id="jen">

            <img className="bioPictures" src="/img/bioPics/jen.jpg"/>
          </div>
        </div>

        <div className="col-md-8 col-md-offset-2">
          <div id="jenBio">
            <h2>Project Manager</h2>
            <h3>Jen</h3>
            <p> A UC Riverside alumni, Jen, project manager by birth and raised in the O.C. If you need a project done she is the one we call to get things done. She loves to try out different food locales with her boyfriend. She loves ice cream, gummy bears,
              or just straight sugar. Oh did we mention she loves raccoons?
            </p>
          </div>

          <div className="row">
            <div className="col-xs-4 col-md-2">
              <a href="https://www.linkedin.com/in/ecomjenma/"><img src="/img/linkedin.png"/></a>
            </div>


          </div>

        </div>
      </div>

      <div className="row" id="square">
        <div className="col-md-2">
          <div id="luis">

            <img className="bioPictures" src="/img/bioPics/luis.png"/>
          </div>
        </div>

        <div className="col-md-8 col-md-offset-2">
          <div id="luisBio">
            <h2>Front/Back End Developer</h2>
            <h3>Luis</h3>
            <p>Luis loves Pizza and Cider. Born and raised in New York but was forced subcumb to the forces of the west side. But as he would say "Why not ask me in person about me?.....I am serious."
            </p>
          </div>

          <div className="row">
            <div className="col-xs-4 col-md-2">
              <a href="https://www.linkedin.com/in/luisthecoder?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BzQUm0lbQTluZSKRUySXiEQ%3D%3D"><img src="/img/linkedin.png"/></a>
            </div>

          </div>

        </div>
      </div>

      <div className="row" id="square">
        <div className="col-md-2">
          <div id="isaac">

            <img className="bioPictures" src="bioPics/isaac.jpg" />
          </div>
        </div>

        <div className="col-md-8 col-md-offset-2">
          <div id="IsaacBio">
            <h2>Front End Developer</h2>
            <h3>Isaac</h3>
            <p>A native Angelino by heart forced to moved to Irvine to save his family from having too much fun. A UCLA alumni and entrepreneur Isaac enjoys the success that he has built for himself. If you don't find him coding he is enjoying his time with
              children and wife. "Are you a mexiCANT or a mexiCAN foo"
            </p>
          </div>

          <div className="row">
            <div className="col-xs-4 col-md-2">
              <a href="https://www.linkedin.com/in/isaac-solis-a403a141/"><img src="img/linkedin.png"/></a>
            </div>

          </div>

        </div>

      </div>

      <div className="row" id="square">
        <div className="col-md-2">
          <div id="brandy">

            <img className="bioPictures" src="/img/bioPics/me.jpg"/>
          </div>
        </div>

        <div className="col-md-8 col-md-offset-2">
          <div id="brandyBio">
            <h2>Front End Developer</h2>
            <h3>Brandy</h3>
            <p>Brandy born in Orange County and lived in Santa his whole life. He studied Computer Science at Cal State Fullerton before deciding History was his calling. Working in multiple customer service jobs he finally settled in Noritz America as a technical
              support. With more ambition than hair he decided to begin a career as a Front End Web Developer. On his free time he likes to go out to different food place with his wife Maria. He also loves to play soccer and beat people online in FIFA. Foo
              he is too good!
            </p>
            <div className="row">
              <div className="col-xs-4 col-md-2">
                <a href="https://www.linkedin.com/in/brandy-antonio-47342a94"><img src="/img/linkedin.png"/></a>
              </div>

            </div>


          </div>
        </div>
      </div>

    </div>

  </div>
);

export default AboutPage;
