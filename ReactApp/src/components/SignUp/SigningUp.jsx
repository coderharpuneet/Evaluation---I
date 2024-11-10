import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './SigningUp.css'

function SignUp() {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formBody = new URLSearchParams();
        for (const [key, value] of Object.entries(formData)) {
            formBody.append(`data[${key}]`, value);
        }

        try {
            const response = await fetch('https://sheetdb.io/api/v1/vld230muh5ubq', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: formBody.toString(),
            });
            
            const data = await response.json();
            if (data) {
                setShowModal(true);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="main d-flex">
            <div className="leftSide text-light">
                <div className="heading d-flex align-items-center">
                    <img src="verbocityLOgo1.png" alt="Verbocity Logo" width="125px" height="125px" />
                    <p style={{ paddingLeft: '20px', fontSize: 'xx-large', fontWeight: '700' }}>Verbocity</p>
                </div>
                <h2>Start your 30-day free trial.</h2>
                <br />
                <div className="planInfo">
                    <i className="fa-solid fa-users"></i>
                    <p>Invite Unlimited Colleagues</p>
                    <p>Integrate with user-friendly tools to boost learning efficiency.</p>
                </div>
                <div className="planInfo">
                    <i className="fa-solid fa-chalkboard-teacher"></i>
                    <p>Interactive Lessons</p>
                    <p>Engage with dynamic and interactive lessons to master languages.</p>
                </div>
                <div className="planInfo">
                    <i className="fa-solid fa-road"></i>
                    <p>Personalized Path</p>
                    <p>Create a customized path to achieve language learning goals.</p>
                </div>
            </div>

            <div className="rightSide container d-flex justify-content-center align-items-center vh-100">
                <div className="card p-4 shadow-lg bg-dark text-light">
                    <h3 className="text-center mb-4">Register with:</h3>
                    <div className="d-flex justify-content-center mb-3">
                        <button className="btn btn-dark mx-2"><i className="fab fa-google"></i> Google</button>
                        <button className="btn btn-dark mx-2"><i className="fa-brands fa-facebook"></i> Facebook</button>
                        <button className="btn btn-dark mx-2"><i className="fa-brands fa-yahoo"></i> Yahoo</button>
                    </div>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                placeholder="Username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <small className="form-text text-muted">Minimum length is 8 characters.</small>
                        </div>
                        <button type="submit" className="btn btn-warning btn-block">Sign Up</button>
                    </form>

                    <div className="text-center mt-3">
                        <p>By creating an account, you agree to the <a href="#">Terms of Service</a>.</p>
                        <p>Already have an account? <a href="../Login/login.html">Login</a></p>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" style={{ color: 'black' }}>Thank you!!</h5>
                                <button type="button" className="close" onClick={() => setShowModal(false)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p style={{ color: 'black' }}>Thank you for logging in.</p>
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

export default SignUp;
