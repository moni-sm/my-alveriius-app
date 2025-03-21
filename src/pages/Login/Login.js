import React from 'react'
import logo1 from '../../images/log1.jpeg'
import logo2 from '../../images/log2.jpg'
import './Login.css'

export const Login = () => {
    return (
        <div>

            <div className="left-section">
                <div className="slider-container">
                    <img className="
                    slider-image active" src={logo1} alt="Slide 1" />
                    <img className="slider-image" src={logo2} alt="Slide 2" />
                    <img className="slider-image" src={logo2} alt="Slide 3" />
                </div>
            </div>
            <div className="right-section">
                <div className="arrow-icon"><a href="../index.html">→</a></div>
                <h5 className="text-center">Welcome to AVERIXIS SOLUTIONS ..!</h5>
                <div className="button-group">
                    <button href="../Alverixis solutions/login.html" className="btn login text-white">
                        LMS Login
                    </button>
                    <button href="../Alverixis solutions/sign.html" className="btn sign">
                        Sign Up
                    </button>
                </div>
                <p className="description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                </p>
                <form>
                    <div className="form-group">
                        <label className="form-label">Learner ID / Email ID</label>
                        <input type="text" className="form-control border border-warning" placeholder="Enter your User name" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <div className="password-input-container">
                            <input type="password" className="form-control border border-warning" placeholder="Enter your Password" />
                            <span className="password-toggle">👁️</span>
                        </div>
                    </div>
                    <div className="form-footer">
                        <label className="remember-me">
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>
                        <button onClick={0} style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>
                            Forgot Password?
                        </button>
                    </div>
                    <button type="submit" className="submit">Login</button>
                </form>
            </div>

        </div>


    )
}
