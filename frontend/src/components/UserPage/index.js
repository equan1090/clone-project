import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Link, useParams } from "react-router-dom";
import './UserPage.css'
import {getUser} from '../../store/user'
import editIcon from '../../images/edit-icon.png'
function UserPage() {

    const id = useParams();
    const dispatch = useDispatch()
    const user = useSelector(state => state.users.user)



    useEffect(() => {
        dispatch(getUser(id.userId))
    }, [dispatch])

    function edit() {
        return (
            <div className='edit-profile-pic'>
                <form>
                    <input type="file" />
                </form>
            </div>
        )
    }
    // const sessionUser = useSelector((state) => state.session.user);

    return(
        <div className="content-container">
            <div className='profile-header'>
                <div className='profile-picture-container'>
                    <img id='profile-picture' src={user?.image} alt="" />
                </div>
                <div className='edit-profile-image'>
                    <p>Edit</p>
                    {/* <img src={editIcon} alt="" /> */}
                </div>
                <div className='profile-info'>
                    <h1 id='profile-username'>{user?.username}</h1>
                </div>
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
