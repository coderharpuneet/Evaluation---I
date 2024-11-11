import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

const VerbocityApp = () => (
  <div>
    <header>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top navbar-scroll">
        <div className="container-fluid">
          <a className="navbar-brand" href="#!"><img src="/Images/favicon.png" height="90px" alt="Verbocity Logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
              <li className="nav-item"><a className="nav-link" style={{ color: '#003049' }} href="#!">Languages</a></li>
              <li className="nav-item"><a className="nav-link" style={{ color: '#003049' }} href="#!">Login</a></li>
              <li className="nav-item"><a className="nav-link" style={{ color: '#003049' }} href="#!">Signup</a></li>
              <li className="nav-item"><a className="nav-link" style={{ color: '#003049' }} href="#!">Contact Us</a></li>
              <li className="nav-item"><a className="nav-link" style={{ color: '#003049' }} href="#!">Pricing</a></li>
            </ul>
            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item me-3 me-lg-0"><a className="nav-link" href="#!"><i className="fas fa-shopping-cart"></i></a></li>
              <li className="nav-item me-3 me-lg-0"><a className="nav-link" href="#!"><i className="fab fa-twitter"></i></a></li>
              <li className="nav-item me-3 me-lg-0"><a className="nav-link" href="#!"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    {/* Image Parallax Section */}
    <div className="video-parallax">
        <video autoPlay muted loop id="background-video">
          <source src="/Images/ladingvideo1.mp4" type="video/mp4" />
        </video>
        <div className="content">
          <h1 className="display-3">We Speak Fluently.</h1>
          <p className="lead">Wanna Learn More? Scroll Down.</p>
        </div>
      </div>

    {/* Why Verbocity Section */}
    <div className="container py-5">
      <div id="cards_landscape_wrap-2" className="container">
        <div className="row">
          <h2 style={{ textAlign: 'center', paddingRight: '300px' }}>Why Verbocity?</h2>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <a href="#!">
              <div className="card-flyer">
                <div className="text-box">
                  <div className="image-box">
                    <img src="/Images/deer.webp" alt="" />
                  </div>
                  <div className="text-container">
                    <h6>Comprehensive Resources</h6>
                    <p>Access cheatsheets, guides, and more to aid your language learning journey.</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <a href="#!">
              <div className="card-flyer">
                <div className="text-box">
                  <div className="image-box">
                    <img src="/Images/parrot.webp" alt="" />
                  </div>
                  <div className="text-container">
                    <h6>User-Friendly Interface</h6>
                    <p>Navigate easily through our website designed to enhance your learning experience.</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <a href="#!">
              <div className="card-flyer">
                <div className="text-box">
                  <div className="image-box">
                    <img src="/Images/cat.webp" alt="" />
                  </div>
                  <div className="text-container">
                    <h6>Learn at Your Pace</h6>
                    <p>Our tools and resources let you learn languages at your own pace.</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Unique Section */}
    <section id="unique-section" className="container-fluid" style={{ color: 'white', backgroundColor: '#D7B4F3' }}>
      <div className="row w-100">
        <div className="col-md-6 p-0">
        </div>
          <img id="unique-image" src="/Images//Images/poc.png" alt="Landing Image" />
        <div id="unique-content" className="col-md-6 d-flex flex-column justify-content-center">
          <h1>It's been proven.</h1>
          <p>Learning a new language has its benefits, whether it be improved memory or creativity. It's not us, it's the professors of Cambridge saying this. Don't believe us? <a href="https://www.cambridge.org/elt/blog/2022/04/29/learning-language-changes-your-brain/">Check it out!</a></p>
        </div>
      </div>
    </section>

    {/* Slider Section */}
    <div className="slider">
      <h2 className="slidetext">Check out our featured languages!</h2>
      <div className="sli">
        <img src="/Images/france.webp" alt="" />
        <img src="/Images/esperanto.png" alt="" />
        <img src="/Images/uk.png" alt="" />
        <img src="/Images/denmark.webp" alt="" />
        <img src="/Images/netherlands.png" alt="" />
        <img src="/Images/norway.webp" alt="" />
        <img src="/Images/portugal.png" alt="" />
        <img src="/Images/india.webp" alt="" />
        <img src="/Images/italy.svg" alt="" />
        <img src="/Images/spain.svg" alt="" />
      </div>
      <div className="sli">
        <img src="/Images/esperanto.png" alt="" />
        <img src="/Images/france.webp" alt="" />
        <img src="/Images/uk.png" alt="" />
        <img src="/Images/denmark.webp" alt="" />
        <img src="/Images/netherlands.png" alt="" />
        <img src="/Images/norway.webp" alt="" />
        <img src="/Images/portugal.png" alt="" />
        <img src="/Images/india.webp" alt="" />
        <img src="/Images/italy.svg" alt="" />
        <img src="/Images/spain.svg" alt="" />
      </div>
    </div>

    {/* Join Us Section */}
    <section id="unique-50vh-section" className="container-fluid">
      <h2>Satisfied? Come Join Us!</h2>
      <button id="unique-button" className="btn">Let's Go!</button>
    </section>

    {/* Footer */}
    <footer>
      <div className="container-fluid mt-5">
        <div className="card mx-5">
          <div className="row mb-4">
            <div className="col-md-4 col-sm-4 col-xs-4">
              <div className="footer-text pull-left">
                <div className="d-flex">
                  <img src="/Images/favicon.png" height="180px" alt="Footer Logo" />
                  <p className="card-text">Verbocity is a project submitted by Harpuneet Singh and Kanika Prabhakar as a part of the 5 credit course titled "Front End Engineering -2" in Chitkara University.</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2"></div>
            <div className="col-md-2 col-sm-2 col-xs-2"></div>
            <div className="col-md-2 col-sm-2 col-xs-2">
              <ul className="card-text">
                <li><a href="#!">Home</a></li>
                <li><a href="#!">Languages</a></li>
                <li><a href="#!">Pricing</a></li>
                <li><a href="#!">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2">
              <ul className="card-text">
                <li><a href="#!">Privacy Policy</a></li>
                <li><a href="#!">Terms of Use</a></li>
                <li><a href="#!">Sign Up</a></li>
                <li><a href="#!">Login</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default VerbocityApp;
