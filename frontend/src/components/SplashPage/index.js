import React, {useEffect} from "react";
import LoginFormPage from "../LoginFormPage";
import githublogo from '../../images/github-logo.png'
import linkedinlogo from '../../images/linkedin.png'
import './SplashPage.css'
function SplashPage() {

    return (
        <div className='splash-wrapper'>
            <div class="splash-container">
                <div class="splash-text">
                    <h3>Tune Cloud</h3>
                    <h1>Music for everyone, anytime</h1>
                </div>
                <div class="splash-img"></div>
                <div class="footer">
                    <a target="_blank" href="https://github.com/equan1090" rel="noreferrer">
                        <img id='github' src={githublogo} alt="" />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/eric-quan-821139190/" rel="noreferrer">
                        <img id='linkedin' src={linkedinlogo} alt="" />
                    </a>
                </div>
                <div class="login-signup-area">
                    <LoginFormPage/>
                </div>
            </div>
        </div>
    )
}

export default SplashPage;
