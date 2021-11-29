import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserSongs } from "../../store/song";
import { useParams, Link } from "react-router-dom";

function UserSongs() {
    const dispatch = useDispatch();
    const params = useParams()
    const songs = useSelector(state => state.songs.songs)

    useEffect(() => {
        
        dispatch(getUserSongs(params.userId))
    }, [dispatch, params])


    return (
        <div className='content-container'>

            <div className='profile-header'>
            <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1631/posts/35798/image/SoundcloudBanner20.jpg"
                    alt="" className='profile-header'/>
                {/* <div className='edit-image'>
                    Hello
                </div> */}

            </div>
            <div className='profile-page-nav'>
                <ul className='profile-page-tabs'>
                    <li>
                        <Link to={`/users/${params.userId}/albums`}>Albums</Link>
                    </li>
                    <li>
                        <Link to={`/users/${params.userId}/songs`}>Tracks</Link>
                    </li>

                </ul>
            </div>
            {Array.isArray(songs) && songs?.map((song) => (
                <ul>
                    <li>
                        <Link to={`/songs/${song.id}`}>{song.name}</Link>
                    </li>
                </ul>
            ))}
        </div>
    )
}

export default UserSongs;
