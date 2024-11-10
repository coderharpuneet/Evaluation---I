import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Loggingin.css'

function Login() {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('Email', formData.email);
        data.append('Password', formData.password);

        try {
            const response = await fetch('https://sheetdb.io/api/v1/4aqfpwxn70397', {
                method: 'POST',
                body: data
            });
            const result = await response.json();
            if (result) {
                setShowModal(true);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="main">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="verbocityLOgo1.png" alt="Verbocity Logo" width="165" height="152" />
                        <h2 style={{ color: 'aliceblue' }}>Welcome To Verbocity</h2>
                        <p style={{ color: 'aliceblue' }}>Your journey to language fluency starts here.</p>
                    </div>
                    <div className="carousel-item">
                        <img src="verbocityLOgo1.png" alt="Verbocity Logo" width="165" height="152" />
                        <h2 style={{ color: 'aliceblue' }}>Why Verbocity?</h2>
                        <p style={{ color: 'aliceblue' }}>Verbocity provides the user to learn over 30 languages.</p>
                    </div>
                    <div className="carousel-item">
                        <img src="verbocityLOgo1.png" alt="Verbocity Logo" width="165" height="152" />
                        <h2 style={{ color: 'aliceblue' }}>With Verbocity</h2>
                        <p style={{ color: 'aliceblue' }}>Unlock the world with Verbocity. Learn languages efficiently and effectively.</p>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <div className="login">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control"
                            required
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="rememberMe" />
                        <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Login</button>
                    <p className="mt-3">Don't have an account? <a href="../SignUp/signUp.html" className="signUp">Sign up</a></p>
                </form>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Thank you!!</h5>
                                <button type="button" className="close" onClick={() => setShowModal(false)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Thank you for logging in.</p>
                            </div>
                            <div className="modal-footer">
                                <a href="../cheatsheets/dutch/index.html" className="btn btn-primary" style={{ backgroundColor: 'rgb(88, 94, 144)' }}>
                                    Go to Home
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;
