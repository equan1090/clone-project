import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useHistory, Link, useParams } from "react-router-dom";


function UserPage() {
    const dispatch = useDispatch();
    const id = useParams();
    // const sessionUser = useSelector((state) => state.session.user);

    return(
        <div className="content-container">
            <div className='profile-header'>
                
            </div>
                <div className='profile-page-nav'>
                    <ul className='profile-page-tabs'>
                        <li>
                            <Link to={`/users/${id.userId}/albums`}>Albums</Link>
                            <Link to={`/users/${id.userId}/songs`}>Tracks</Link>
                        </li>

                    </ul>
                </div>
        </div>
    )
}

export default UserPage;
