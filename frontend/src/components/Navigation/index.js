import React from 'react';
import { NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';



function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div>

        <ProfileButton user={sessionUser} />
      </div>
    );
  } else {
    sessionLinks = (
      <ul className='nav-links'>
        <li>

        </li>
        <li>
          <NavLink to="/login" className="header__navMenuItem">Log In/Demo User</NavLink>
        </li>
        <li>
          <NavLink to="/signup" className="header__navMenuItem">Sign Up</NavLink>
        </li>
      </ul>
    );
  }

  return (
      <header className='top-nav-bar'>
        <ul className='headerBtn'>
          <li>
            <NavLink exact to="/" className="header__navMenuItem">Tune Cloud</NavLink>
          </li>
          <li>
            <NavLink to="/songs/new" className="header__navMenuItem" id="uploadBtn">Upload</NavLink>
          </li>
        </ul>
        {isLoaded && sessionLinks}
      </header>
  );
}

export default Navigation;
