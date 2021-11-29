import React from 'react';
import { NavLink, Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';

import './Navigation.css';



function Navigation(){
  const sessionUser = useSelector(state => state.session.user);



  let sessionLinks;
  // if (sessionUser) {
  //   sessionLinks = (
  //     <div>
  //       <ProfileButton user={sessionUser} />
  //     </div>
  //   );
  // }

  // if (props === 'home'){
    return (
        <div className='top-nav-bar'>

            <li>
            <h1 id='home-btn'>Tune Cloud</h1>
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

        </div>
    );
  // }
  // else if (props === 'createAlbum'){
  //   return (
  //       <header className='top-nav-bar'>

  //           <li>
  //             <h1 id='home-btn'>Tune Cloud</h1>
  //           </li>
  //           <li>
  //             <NavLink exact to='/home' className="header__navMenuItem">Home</NavLink>
  //           </li>
  //           <li>
  //             <NavLink exact to='/albums/new' className='header__navMenuItem active'>Create Album</NavLink>
  //           </li>
  //           <li>
  //             <NavLink to="/songs/new" className="header__navMenuItem">Upload Song</NavLink>
  //           </li>


  //         {sessionLinks}
  //       </header>
  //   );
  // }
  // else if (props === 'uploadSong') {
  //   return (
  //       <header className='top-nav-bar'>

  //           <li>
  //           <h1 id='home-btn'>Tune Cloud</h1>
  //           </li>
  //           <li>
  //             <NavLink exact to='/home' className="header__navMenuItem">Home</NavLink>
  //           </li>
  //           <li>
  //             <NavLink exact to='/albums/new' className='header__navMenuItem'>Create Album</NavLink>
  //           </li>
  //           <li>
  //             <NavLink to="/songs/new" className="header__navMenuItem active">Upload Song</NavLink>
  //           </li>


  //         {sessionLinks}
  //       </header>
  //   );
  // }
  // else{
  //   return (
  //     <header className='top-nav-bar'>

  //       <li>
  //       <h1 id='home-btn'>Tune Cloud</h1>
  //       </li>
  //       <li>
  //         <NavLink exact to='/home' className="header__navMenuItem">Home</NavLink>
  //       </li>
  //       <li>
  //         <NavLink exact to='/albums/new' className='header__navMenuItem'>Create Album</NavLink>
  //       </li>
  //       <li>
  //         <NavLink to="/songs/new" className="header__navMenuItem">Upload Song</NavLink>
  //       </li>


  //     {sessionLinks}
  //    </header>
  //   )
  // }

}

export default Navigation;
