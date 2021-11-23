import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import LoginFormPage from "../LoginFormPage";
import githublogo from '../../images/github-logo.png'
import linkedinlogo from '../../images/linkedin.png'
import SignupFormPage from "../SignupFormPage";
import './SplashPage.css'
function SplashPage() {

    return (
        <div className='splash-wrapper'>
            <div className="splash-container">
                <div className="splash-text">
                    <h3>Tune Cloud</h3>
                    <h1>Music for everyone, anytime</h1>
                </div>
                <div className="splash-img"></div>
                <div className="footer">
                    <a target="_blank" href="https://github.com/equan1090" rel="noreferrer">
                        <img id='github' src={githublogo} alt="" />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/eric-quan-821139190/" rel="noreferrer">
                        <img id='linkedin' src={linkedinlogo} alt="" />
                    </a>
                </div>
                <div className="login-signup-area">
                    <div className='login-area'>
                        <h2 id='login-header'>Tune Cloud</h2>
                        <LoginFormPage/>
                    </div>
                    <div className='signup-area'>
                        Not registered? Sign up &nbsp;<Link to='/signup' className='sign-up-here'>here</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SplashPage;
