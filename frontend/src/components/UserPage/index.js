import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Link, useParams, useHistory } from "react-router-dom";
import './UserPage.css'
import {getUser} from '../../store/user'
import editIcon from '../../images/edit-icon.png'
import Navigation from "../Navigation";
import ProfileButton from "../Navigation/ProfileButton";
import { getUserAlbums } from "../../store/album";
import AlbumPage from "../AlbumPage";
import AlbumCard from "../AlbumCard";
function UserPage() {
    const history = useHistory()
    const id = useParams();
    const dispatch = useDispatch()
    const user = useSelector(state => state.users.user)
    const sessionUser = useSelector((state) => state.session.user);
    const params = useParams()
    const albums = useSelector(state => state.albums.albums);
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
        dispatch(getUserAlbums(params.userId))
    }, [dispatch, params])
    console.log('these are the user albums', albums)

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
                <ul className='profile-page-tabs'>
                     <li>
                         <Link to={`/users/${id.userId}`}>Albums</Link>
                    </li>
                     <li>
                         <Link to={`/users/${id.userId}/songs`}>Tracks</Link>
                     </li>

               </ul>
                <h1 id='album-header'>Albums</h1>
                <div className='album-list'>
                    {Array.isArray(albums) && albums?.map((album) => (
                        <AlbumCard album={album} />
                    ))}

                </div>
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
