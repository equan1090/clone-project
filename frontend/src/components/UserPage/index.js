import React from "react";


import {  Link, useParams } from "react-router-dom";
import './UserPage.css'


function UserPage() {

    const id = useParams();
    // const sessionUser = useSelector((state) => state.session.user);

    return(
        <div className="content-container">
            <div className='profile-header'>
                <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1631/posts/35798/image/SoundcloudBanner20.jpg"
                    alt="" className='profile-header'/>
  


            </div>
            <div className='profile-page-nav'>
                <ul className='profile-page-tabs'>
                    <li>
                        <Link to={`/users/${id.userId}/albums`}>Albums</Link>
                    </li>
                    <li>
                        <Link to={`/users/${id.userId}/songs`}>Tracks</Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default UserPage;
