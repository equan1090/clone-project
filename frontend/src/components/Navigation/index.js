import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import github from '../../images/github-logo.png'
import linkedin from '../../images/linkedin.png'
import './Navigation.css';



function Navigation(){
  const sessionUser = useSelector(state => state.session.user);


    return (

        <div className='top-nav-bar'>

            <li>
            <h1 id='home-btn' style={{color:'white'}}>Tune Cloud</h1>
            </li>
            <li>
              <NavLink exact to='/home' className="header__navMenuItem ">Home</NavLink>
            </li>
            <li>
              <NavLink exact to='/albums/new' className='header__navMenuItem'>Create Album</NavLink>
            </li>
            <li>
              <NavLink to="/songs/new" className="header__navMenuItem">Upload Song</NavLink>
            </li>
            <div className='social-links'>

              <li>
                <a target="_blank" href="https://github.com/equan1090" rel="noreferrer"><img className='nav-social' src={github} alt="" /></a>
              </li>
              <li>
                <a target="_blank" href="https://www.linkedin.com/in/eric-quan-821139190/" rel="noreferrer"><img className='nav-social' src={linkedin} alt="" /></a>
              </li>
            </div>
        </div>
    );


}

export default Navigation;
