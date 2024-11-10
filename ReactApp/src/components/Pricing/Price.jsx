import React from 'react'
import './Price.css'
function Price() {
  return (
    <>
  <div className="nav" style={{ background: "#1b1b1b" }}>
    <input type="checkbox" id="nav-check" />
    <div className="nav-header"></div>
    <div className="nav-btn">
      <label htmlFor="nav-check">
        <span />
        <span />
        <span />
      </label>
    </div>
    <div className="nav-links">
      <a href="#">Home</a>
      <a href="#">Languages</a>
      <a href="#">Login</a>
      <a href="#">Signup</a>
      <a href="#">Contact Us</a>
    </div>
  </div>
  <div className="heading">
    <h1>Pricing</h1>
    <p>Here are the different subscription plans that we offer. </p>
  </div>
  <div className="pricing-cards">
    <div className="pricing-card">
      <div className="card">
        <h3
          className="card-title week"
          style={{ paddingLeft: 55, fontSize: 37, paddingTop: 25 }}
        >
          Weekly
        </h3>
        <hr className="first" />
        <p className="card-price">₹30/-</p>
        <ul className="features">
          <li>
            Access to all language courses and personalized sessions for a week.
          </li>
          <li>
            Interactive quizzes and exercises to test your skills which help to
            prepare for exams.
          </li>
          <li>Join group study sessions with other learners.</li>
          <li>Track your progress with weekly performance reports.</li>
        </ul>
        <hr className="second" />
        <a href="#" className="card-btn">
          I want it
        </a>
      </div>
    </div>
    <div className="pricing-card">
      <div className="card">
        <h3
          className="card-title mon"
          style={{ paddingLeft: 38, fontSize: 37, paddingTop: 25 }}
        >
          Monthly
        </h3>
        <hr className="first" />
        <p className="card-price">₹99/-</p>
        <ul className="features">
          <li>
            Access to all language courses and personalized sessions for a week.
          </li>
          <li>
            Interactive quizzes and exercises to test your skills which help to
            prepare for exams.
          </li>
          <li>Join group study sessions with other learners.</li>
          <li>Track your progress with weekly performance reports.</li>
        </ul>
        <hr className="second" />
        <a href="#" className="card-btn">
          I want it
        </a>
      </div>
    </div>
    <div className="pricing-card">
      <div className="card">
        <h3
          className="card-title year"
          style={{ paddingLeft: 55, fontSize: 37, paddingTop: 25 }}
        >
          Yearly
        </h3>
        <hr className="first" />
        <p className="card-price">₹333/-</p>
        <ul className="features">
          <li>
            Access to all language courses and personalized sessions for a week.
          </li>
          <li>
            Interactive quizzes and exercises to test your skills which help to
            prepare for exams.
          </li>
          <li>Join group study sessions with other learners.</li>
          <li>Track your progress with weekly performance reports.</li>
        </ul>
        <hr className="second" />
        <a href="index(2).html" className="card-btn">
          I want it
        </a>
      </div>
    </div>
  </div>
</>

  )
}

export default Price