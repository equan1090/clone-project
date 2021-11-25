import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Link, useParams, useHistory } from "react-router-dom";
import './UserPage.css'
import {getUser} from '../../store/user'
import editIcon from '../../images/edit-icon.png'
import Navigation from "../Navigation";
import ProfileButton from "../Navigation/ProfileButton";
function UserPage() {
    const history = useHistory()
    const id = useParams();
    const dispatch = useDispatch()
    const user = useSelector(state => state.users.user)
    const sessionUser = useSelector((state) => state.session.user);

    function Edit() {
        if(sessionUser?.id === user?.id){
            return (
                <div className='edit-profile-image'
                onClick={() => history.push(`/users/${sessionUser?.id}/edit`)}>
                    <p>Edit</p>
                </div>
            )
        }else{
            return null
        }

    }


    useEffect(() => {
        dispatch(getUser(id.userId))
    }, [dispatch])


    return(
        <div class="profile-wrapper">
            <div class="Navigation">
                <Navigation />
            </div>
            <div class="profile-page-header">
                <ProfileButton user={sessionUser} />
                <div className='profile-picture-container'>
                    <img id='profile-picture' src={user?.image} alt="" />
                 </div>
                 <Edit />
                 <div className='profile-info'>
                    <h1 id='profile-username'>{user?.username}</h1>
                </div>
            </div>
            <div class="profile-album-list">

            </div>
        </div>
        // <div className="content-container">
        //     <div className='profile-header'>
        //         <div className='profile-picture-container'>
        //             <img id='profile-picture' src={user?.image} alt="" />
        //         </div>
        //         <Edit />
        //         <div className='profile-info'>
        //             <h1 id='profile-username'>{user?.username}</h1>
        //         </div>
        //     </div>
        //     <div className='profile-page-nav'>
        //         <ul className='profile-page-tabs'>
        //             <li>
        //                 <Link to={`/users/${id.userId}/albums`}>Albums</Link>
        //             </li>
        //             <li>
        //                 <Link to={`/users/${id.userId}/songs`}>Tracks</Link>
        //             </li>

        //         </ul>
        //     </div>
        // </div>
    )
}

export default UserPage;
