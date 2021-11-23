import React from 'react';
import { NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';

import './Navigation.css';



function Navigation({props}){
  const sessionUser = useSelector(state => state.session.user);

  console.log('this is session.user', sessionUser)

  let sessionLinks;
  // if (sessionUser) {
  //   sessionLinks = (
  //     <div>
  //       <ProfileButton user={sessionUser} />
  //     </div>
  //   );
  // }

  if (props === 'home'){
    return (
        <header className='top-nav-bar'>

            <li>
              <NavLink exact to="/" id='home-btn' className="header__navMenuItem">Tune Cloud</NavLink>
            </li>
            <li>
              <NavLink exact to='/' className="header__navMenuItem active">Home</NavLink>
            </li>
            <li>
              <NavLink exact to='/albums/new' className='header__navMenuItem'>Create Album</NavLink>
            </li>
            <li>
              <NavLink to="/songs/new" className="header__navMenuItem">Upload Song</NavLink>
            </li>
          {sessionLinks}
        </header>
    );
  }
  else if (props === 'createAlbum'){
    return (
        <header className='top-nav-bar'>

            <li>
              <NavLink exact to="/" id='home-btn' className="header__navMenuItem">Tune Cloud</NavLink>
            </li>
            <li>
              <NavLink exact to='/' className="header__navMenuItem">Home</NavLink>
            </li>
            <li>
              <NavLink exact to='/albums/new' className='header__navMenuItem active'>Create Album</NavLink>
            </li>
            <li>
              <NavLink to="/songs/new" className="header__navMenuItem">Upload Song</NavLink>
            </li>


          {sessionLinks}
        </header>
    );
  }
  else {
    return (
        <header className='top-nav-bar'>

            <li>
              <NavLink exact to="/" id='home-btn' className="header__navMenuItem">Tune Cloud</NavLink>
            </li>
            <li>
              <NavLink exact to='/' className="header__navMenuItem">Home</NavLink>
            </li>
            <li>
              <NavLink exact to='/albums/new' className='header__navMenuItem'>Create Album</NavLink>
            </li>
            <li>
              <NavLink to="/songs/new" className="header__navMenuItem active">Upload Song</NavLink>
            </li>


          {sessionLinks}
        </header>
    );
  }

}

export default Navigation;
