import React from 'react'
import './Module.css'
const Module1 = () => {
  return (
    <main>
            <div className="sidebar body_background">
                <nav>
                    <a className="navbar-brand" href="#">
                        Verbocity
                    </a>
                    <ul>
                        <li className="active">
                            <i
                                className="fa-solid fa-play cbutton"
                                style={{ paddingRight: 15, fontSize: "large" }}
                            />
                            <a
                                href="Module1.html"
                                style={{ color: "black", textDecoration: "none" }}
                            >
                                Module 01
                                <br />
                                <small>Learn Dutch For Beginners</small>
                            </a>
                        </li>
                        <li>
                            <i
                                className="fa-solid fa-play cbutton current-module"
                                style={{ paddingRight: 15, fontSize: "large" }}
                            />
                            <a
                                href="Module2.html"
                                style={{ color: "black", textDecoration: "none" }}
                            >
                                Module 02
                                <br />
                                <small>Dutch Greetings</small>
                            </a>
                        </li>
                        <li>
                            <i
                                className="fa-solid fa-play cbutton"
                                style={{ paddingRight: 15, fontSize: "large" }}
                            />
                            <a
                                href="Module3.html"
                                style={{ color: "black", textDecoration: "none" }}
                            >
                                Module 03
                                <br />
                                <small>Introducing yourself in Dutch</small>
                            </a>
                        </li>
                        <li>
                            <i
                                className="fa-solid fa-play cbutton"
                                style={{ paddingRight: 15, fontSize: "large" }}
                            />
                            <a
                                href="Module4.html"
                                style={{ color: "black", textDecoration: "none" }}
                            >
                                Module 04
                                <br />
                                <small>Where are you from and where do you live</small>
                            </a>
                        </li>
                        <li>
                            <i
                                className="fa-solid fa-play cbutton"
                                style={{ paddingRight: 15, fontSize: "large" }}
                            />
                            <a
                                href="Module5.html"
                                style={{ color: "black", textDecoration: "none" }}
                            >
                                Module 05
                                <br />
                                <small>Dutch Sounds and the Alphabets</small>
                            </a>
                        </li>
                        <li>
                            <i
                                className="fa-solid fa-play cbutton"
                                style={{ paddingRight: 15, fontSize: "large" }}
                            />
                            <a
                                href="Module6.html"
                                style={{ color: "black", textDecoration: "none" }}
                            >
                                Module 06
                                <br />
                                <small style={{ paddingLeft: 28 }}>Dutch Quiz</small>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="main-content">
                <div className="d-flex justify-content-between align-items-center courseName">
                    <h4>Dutch Course</h4>
                    {/* Progress Circle */}
                    <div className="circle crimson">
                        <div id="circle_inner" style={{ color: "white" }}>
                            95%
                        </div>
                    </div>
                </div>
                {/* Video Section */}
                <div className="video-container" style={{ justifyContent: "right" }}>
                    <iframe
                        id="ytplayer"
                        width="100%"
                        height={500}
                        src="import React from 'react'
import './Module.css'
const Module1 = () => {
  return (
    <main>
            <div className="sidebar body_background">
                <nav>
                    <a className="navbar-brand" href="#">
                        Verbocity
                    </a>
                    <ul>
                        <li className="active">
                            <i
                                className="fa-solid fa-play cbutton"
                                style={{ paddingRight: 15, fontSize: "large" }}
                            />
                            <a
                                href="Module1.html"
                                style={{ color: "black", textDecoration: "none" }}
                            >
                                Module 01
                                <br />
                                <small>Learn Dutch For Beginners</small>
                            </a>
                        </li>
                        <li>
                            <i
                                className="fa-solid fa-play cbutton current-module"
                                style={{ paddingRight: 15, fontSize: "large" }}
                            />
                            <a
                                href="Module2.html"
                                style={{ color: "black", textDecoration: "none" }}
                            >
                                Module 02
                                <br />
                                <small>Dutch Greetings</small>
                            </a>
                        </li>
                        <li>
                            <i
                                className="fa-solid fa-play cbutton"
                                style={{ paddingRight: 15, fontSize: "large" }}
                            />
                            <a
                                href="Module3.html"
                                style={{ color: "black", textDecoration: "none" }}
                            >
                                Module 03
                                <br />
                                <small>Introducing yourself in Dutch</small>
                            </a>
                        </li>
                        <li>
                            <i
                                className="fa-solid fa-play cbutton"
                                style={{ paddingRight: 15, fontSize: "large" }}
                            />
                            <a
                                href="Module4.html"
                                style={{ color: "black", textDecoration: "none" }}
                            >
                                Module 04
                                <br />
                                <small>Where are you from and where do you live</small>
                            </a>
                        </li>
                        <li>
                            <i
                                className="fa-solid fa-play cbutton"
                                style={{ paddingRight: 15, fontSize: "large" }}
                            />
                            <a
                                href="Module5.html"
                                style={{ color: "black", textDecoration: "none" }}
                            >
                                Module 05
                                <br />
                                <small>Dutch Sounds and the Alphabets</small>
                            </a>
                        </li>
                        <li>
                            <i
                                className="fa-solid fa-play cbutton"
                                style={{ paddingRight: 15, fontSize: "large" }}
                            />
                            <a
                                href="Module6.html"
                                style={{ color: "black", textDecoration: "none" }}
                            >
                                Module 06
                                <br />
                                <small style={{ paddingLeft: 28 }}>Dutch Quiz</small>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="main-content">
                <div className="d-flex justify-content-between align-items-center courseName">
                    <h4>Dutch Course</h4>
                    {/* Progress Circle */}
                    <div className="circle crimson">
                        <div id="circle_inner" style={{ color: "white" }}>
                            95%
                        </div>
                    </div>
                </div>
                {/* Video Section */}
                <div className="video-container" style={{ justifyContent: "right" }}>
                    <iframe
                        id="ytplayer"
                        width="100%"
                        height={500}
                        src="https://www.youtube.com/embed/Dbv79prOMEk?enablejsapi=1"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen=""
                    />
                </div>
                {/* Buttons Section */}
                <div className="buttons">
                    <button
                        style={{
                            backgroundColor: "#ff6d3a",
                            borderRadius: 5,
                            padding: "10px 25px"
                        }}
                        className="cheatbtn"
                    >
                        <a
                            style={{ textDecoration: "none", color: "white" }}
                            href="../../cheatsheets/dutch/index.html"
                        >
                            View Cheatsheets
                        </a>
                    </button>
                </div>
            </div>
        </main>
  )
}


export default Module4